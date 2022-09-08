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
    const row = Math.floor(point / columns);
    const column = point % columns;
    return [row, column -1];
}

const findNeighbours = (startRow, startCol, rowCount, columnCount, grid) => {
    let neighboursUnfiltered = [
        startRow - 1 >= 0 ? [startRow - 1 , startCol] : [],
        startRow+ 1 < rowCount ? [startRow+1, startCol] : [],
        startCol - 1 >= 0 ? [startRow , startCol - 1] : [],
        startCol + 1 < columnCount ? [startRow , startCol + 1] : []
    ];
    return neighboursUnfiltered;
}

const dijkstraAlgorithm = async (grid, rowCount, columnCount, start, finish) => {
    let finished = false;
    const [unvisitedNodes, grid2D] = constructGrid2D(grid, rowCount, columnCount);
    const [startRow, startCol] = mapTo2D(start, rowCount, columnCount);
    const [finalRow, finalCol] = mapTo2D(finish, rowCount, columnCount); 
    grid2D[startRow][startCol].weight = 0; 

    let priorityQueue = [];
    let neighboursUnfiltered = findNeighbours(startRow, startCol, rowCount, columnCount, grid2D);

    priorityQueue.concat(neighboursUnfiltered.filter((value) => {
        if (value.length === 0) {
            return false;
        } else if (grid2D[value[0]][value[1]].visited === false) {
            return true;
        }
    }));

    while (priorityQueue.length > 0 && !finished) {

    }

}

export default dijkstraAlgorithm;