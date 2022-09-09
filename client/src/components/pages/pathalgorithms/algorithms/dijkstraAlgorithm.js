/*
    Constructing the 2D Grid for better visualitation and an actual grid
    Make a list of the unvisited nodes for the dijkstra algorithm

    params: original grid, number of rows, number of columns
    return: [list of unvisited nodes, 2d grid]

*/

const constructGrid2D = (grid, rowCount, columnCount) => {
    let newGrid = new Array(rowCount).fill(0).map(() => new Array(columnCount).fill(0));
    let unvisitedNodes = [];
    const finalValue = Object.keys(grid).pop();
    for (let i = 0; i < finalValue ; i++) {
        const row = Math.floor(i / columnCount);
        const column = i % columnCount;
        unvisitedNodes.push([row, column]);
        newGrid[row][column] = grid[i+1];
    }

    return [unvisitedNodes, newGrid];
}

/*
    Going from a key to a 2d location

    params: point, number of rows, number of columns
    return: [x, y]
*/

const mapTo2D = (point, rows, columns) => {
    const row = Math.floor((point - 1) / columns);
    const column = (point-1) % columns;
    return [row, column];
}

const findNeighbours = (startRow, startCol, rowCount, columnCount) => {
    let neighboursUnfiltered = [
        startRow - 1 >= 0 ? [startRow - 1 , startCol] : [],
        startRow + 1 < rowCount ? [startRow + 1, startCol] : [],
        startCol - 1 >= 0 ? [startRow , startCol - 1] : [],
        startCol + 1 < columnCount ? [startRow , startCol + 1] : []
    ];
    return neighboursUnfiltered;
}



const dijkstraAlgorithm = async (grid, rowCount, columnCount, start, finish) => {
    let finished = false;
    const [, grid2D] = constructGrid2D(grid, rowCount, columnCount);
    const [startRow, startCol] = mapTo2D(start, rowCount, columnCount);
    const [finalRow, finalCol] = mapTo2D(finish, rowCount, columnCount); 
    grid2D[startRow][startCol].weight = 0; 
    grid2D[startRow][startCol].previousNode = [startRow,startCol];

    const checkVisited = (element) => {
        return !grid2D[element[0]][element[1]].visited;
    }

    const getValidNeighbours = (unfilteredArray) => {
        return unfilteredArray.filter((value) => value.length !== 0 && checkVisited(value) && !grid2D[value[0]][value[1]].obstacle); // add the condition for an obstacle yes or no
    }

    let priorityQueue = [];
    priorityQueue.push([startRow, startCol]);
    
    while (priorityQueue.length > 0 && !finished) {
        const currentCell = priorityQueue.shift();
        const currentCellValues = currentCell ? grid2D[currentCell[0]][currentCell[1]] : null;
        if (currentCellValues.visited) {
            continue;    
        }
        grid2D[currentCell[0]][currentCell[1]].visited = true;
        const neighbouringcells = getValidNeighbours(findNeighbours(currentCell[0], currentCell[1], rowCount, columnCount));

        for (const coordinate of neighbouringcells) {
            let neighbourValue = grid2D[coordinate[0]][coordinate[1]];
            let distance = currentCellValues.weight + 1;
            if (distance < neighbourValue.weight) {
                neighbourValue.weight = distance;
                neighbourValue.previousNode = currentCell;
            }
        }
        priorityQueue = priorityQueue.concat(neighbouringcells);

        if (currentCell[0] === finalRow && currentCell[1] === finalCol) {
            finished = true;
        }

    }

    let pathStop = grid2D[finalRow][finalCol];
    let shortestPath = [[finalRow, finalCol]]
    grid2D[finalRow][finalCol].onShortestPath = true;

    while (pathStop.weight !== 0 && pathStop.visited) {
        shortestPath.push(pathStop.previousNode);
        grid2D[pathStop.previousNode[0]][pathStop.previousNode[1]].onShortestPath = true;
        pathStop = grid2D[pathStop.previousNode[0]][pathStop.previousNode[1]];
    }

    return [grid2D, shortestPath];

}

export default dijkstraAlgorithm;