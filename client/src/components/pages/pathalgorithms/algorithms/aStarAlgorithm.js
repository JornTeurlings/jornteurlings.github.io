import { constructGrid2D } from "./helpers/constructGrid2D";
import { findNeighbours } from './helpers/findNeighbours';
import { heuristicFunctionAStar } from "./helpers/heuristicFunction";
import { mapTo2D } from "./helpers/pointTo2D";
import { convertToGrid } from "./helpers/convertToGrid";
import promiseTimeout from "../../../../helpers/promiseTimeout";

const GRIDCOST = 1;

const findMinNode = (openList) => {
    let min = Number.MAX_SAFE_INTEGER;
    let minCell = []
    const entries = openList.entries();
    for (let i = 0; i < openList.size; i++) {
        let currentValue = entries.next().value
        if (currentValue[1].f < min) {
            min = currentValue[1].f;
            minCell = currentValue[0];
        }
    }
    return minCell;
}



const aStarAlgorithm = async (grid, rowCount, columnCount, start, finish, setMatrix) => {
    const [, grid2D] = constructGrid2D(grid, rowCount, columnCount);
    const [startRow, startCol] = mapTo2D(start, rowCount, columnCount);
    const [finalRow, finalCol] = mapTo2D(finish, rowCount, columnCount); 

    let finished = false;
    let openList = new Map() , closedList = new Map();
    openList.set(JSON.stringify([startRow, startCol]),  {f: 0, g: 0, parent: [startRow, startCol]});

    const getValidNeighbours = (unfilteredArray) => {
        return unfilteredArray.filter((value) => value.length !== 0 && !grid2D[value[0]][value[1]].obstacle);
    }
    

    while (openList.size > 0 && !finished) {
        const currentCell = JSON.parse(findMinNode(openList));
        const stringedCell = JSON.stringify(currentCell);
        grid2D[currentCell[0]][currentCell[1]].visited = true;

        setMatrix(convertToGrid(grid2D));
        await promiseTimeout({timeout: 100});

        const currentCellInfo = openList.get(stringedCell);
        openList.delete(stringedCell);
        closedList.set(stringedCell, currentCellInfo);

        if (currentCell[0] === finalRow && currentCell[1] === finalCol) {
            finished = true;
            continue;
        }
        const children = getValidNeighbours(findNeighbours(currentCell[0], currentCell[1], rowCount, columnCount));
        for (let child of children) {
            let position = JSON.stringify([child[0], child[1]]);
            if (closedList.has(position)) {
                continue;
            }
            child.g = currentCellInfo.g + GRIDCOST;
            child.h = heuristicFunctionAStar(child, [finalRow, finalCol]);
            child.f = child.g + child.h;

            if (closedList.has(position)){
                if ((closedList.get(position)).f > child.f) {
                    openList.set(position, { f: child.f, g: child.g, parent: [currentCell[0], currentCell[1]]}); 
                }
            } else if (openList.has(position)) {
                if ((openList.get(position)).f > child.f) {
                    openList.set(position, { f: child.f, g: child.g, parent: [currentCell[0], currentCell[1]]}); 
                }
            } else {
                openList.set(position, { f : child.f, g: child.g,  parent: [currentCell[0], currentCell[1]] })
            }
        }
    }
    let currentTraceCell = [finalRow, finalCol];
    grid2D[startRow][startCol].onShortestPath = true;

    while (!(currentTraceCell[0] === startRow && currentTraceCell[1] === startCol)) {
        let previousNode = (closedList.get(JSON.stringify(currentTraceCell))).parent;
        grid2D[currentTraceCell[0]][currentTraceCell[1]].onShortestPath = true;
        setMatrix(convertToGrid(grid2D));
        await promiseTimeout({timeout: 100});
        
        currentTraceCell = previousNode;
    }

    return grid2D;

}

export default aStarAlgorithm;