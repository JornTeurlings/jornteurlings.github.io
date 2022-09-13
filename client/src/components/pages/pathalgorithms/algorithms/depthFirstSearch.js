import { constructGrid2D } from "./helpers/constructGrid2D";
import { findNeighbours } from './helpers/findNeighbours';
import { mapTo2D } from "./helpers/pointTo2D";


const depthFirstSearch = async (grid, rowCount, columnCount, start, finish) => {
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

    let queue = [];
    queue.push([startRow, startCol]);
    
    while (queue.length > 0 && !finished) {
        const currentCell = queue.shift();
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
        queue = neighbouringcells.concat(queue);

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

export default depthFirstSearch;