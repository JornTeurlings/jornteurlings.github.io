import './css/PathGridContainer.css'

import dijkstraAlgorithm from './algorithms/dijkstraAlgorithm';

import PathGridBox from "./PathGridBox";
import PathGridPoint from "./PathGridPoint";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState, useCallback } from "react";
import { ItemTypes } from "../../../constants/ItemTypes";
import aStarAlgorithm from './algorithms/aStarAlgorithm';

const matrixBuilder = (rowCount, columnCount, begin, finish) => {
    const totalSquares = rowCount * columnCount;
    const grid = {};
    for (let key = 1; key <= totalSquares; key++) {
        const squareDetails = {
            weight: Number.MAX_SAFE_INTEGER,
            previousNode: undefined,
            onShortestPath: false,
            visited: false,
            obstacle: false,
            start: false,
            finish: false,
        }

        if(key === begin) {
            squareDetails.start = true;
        } else if (key === finish) {
            squareDetails.finish = true;
        }

        grid[key] = squareDetails;
    }

    return grid;
}

const resetMatrix = (rowCount, columnCount, begin, finish, grid) => {
    const totalSquares = rowCount * columnCount;
    const gridNew = grid;
    for (let key = 1; key <= totalSquares; key++) {
        grid[key].onShortestPath = false;
        grid[key].visited = false;
        grid[key].previousNode = undefined;
        grid[key].weight = Number.MAX_SAFE_INTEGER;
    }

    return gridNew;
}

const runAlgorithm = async (grid, rowCount, columnCount, start, finish, algorithm = 'astar', setGrid) => {
    let newGrid = [];
    switch(algorithm) {
        case 'dijkstra': 
            [newGrid, ] = await dijkstraAlgorithm(grid, rowCount, columnCount, start, finish);
            break;
        case 'astar':
            newGrid = await aStarAlgorithm(grid, rowCount, columnCount, start, finish, setGrid);
            break;
        default:
            newGrid = grid;
    }
    let arrayNew = [].concat(...newGrid);
    arrayNew.unshift({'x': 'x'});
    let objectNew = Object.assign({}, arrayNew);
    delete objectNew[0];
    return objectNew;
}

const PathGridContainer = (props) => {
    const columnCount = 20;
    const rowCount = 20;
    const [matrix, setMatrix] = useState([]);
    const [, updateState] = useState();
    const [beginPointCell, setBeginPointCell] = useState(20);
    const [finalPointCell, setFinalPointCell] = useState(80);
    const forceUpdate = useCallback(() => updateState({}), []);

    const onClick = (event) => {
        const id = event.target.id; 
        const matrixNew = matrix;
        if (matrixNew[id].start || matrixNew[id].finish) {
            return;
        }
        matrixNew[id].obstacle = !matrixNew[id].obstacle;
        setMatrix(matrixNew); 
    }

    const rowBuilder = (rowIndex, columnIndex, rows = []) => {
        if (rowIndex > 0) {
            const squareKey = rowIndex * columnIndex; 
            rows.push(squareBuilder(squareKey, rowIndex, columnIndex));
            return rowBuilder(rowIndex - 1, columnIndex, rows);
        }

        return rows.reverse();
    }

    const squareBuilder = (squareKey, rowIndex, columnIndex, row = []) => {
        if (columnIndex > 0) {
            const square = matrix[squareKey];
            let child = null;
            if (squareKey === beginPointCell) {
                child = <PathGridPoint number={0} type="begin"/>
            }

            if (squareKey === finalPointCell) {
                child = <PathGridPoint number={1} type="finish" />
            }


            row.push(<PathGridBox
                id={squareKey}
                key={squareKey}
                obstacle={square.obstacle}
                visited={square.visited}
                path={square.onShortestPath}
                weight={square.weight}
                handleClick={(event) => {
                    onClick(event);
                    forceUpdate();
                }}
                children={child}
                />
                )
            return squareBuilder(squareKey - 1, rowIndex, columnIndex - 1, row);
        }

        return (<div className="m-auto" key={`row-${rowIndex}`}>{row.reverse()}</div>);
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            if (result.draggableId === ItemTypes.BEGIN) {
                setBeginPointCell(parseInt(destination.droppableId));
                let newMatrix = matrix;
                newMatrix[source.droppableId].start = false;
                newMatrix[source.droppableId].weight = Number.MAX_SAFE_INTEGER;
                newMatrix[destination.droppableId].start = true;
                setMatrix(newMatrix);
            } else if (result.draggableId === ItemTypes.FINISH) {
                setFinalPointCell(parseInt(destination.droppableId));
                let newMatrix = matrix;
                newMatrix[source.droppableId].finish = false;
                newMatrix[destination.droppableId].finish = true;
                setMatrix(newMatrix);
            }
            
        }
        
    }

    useEffect(() => {
        if (props.active) {
            setMatrix(resetMatrix(rowCount, columnCount, beginPointCell, finalPointCell, matrix));
            runAlgorithm(matrix, rowCount, columnCount, beginPointCell, finalPointCell, props.algorithm, setMatrix).then(newGrid =>  {
                setMatrix(newGrid)
                props.setActive(false);
            });
        } else if (props.reset) {
            console.log('arrivados');
            setMatrix(matrixBuilder(rowCount, columnCount, beginPointCell, finalPointCell));
            props.setReset(false);
        }
    }, [props.active, props.reset]);

    useEffect(() => {
        setMatrix(matrixBuilder(rowCount, columnCount, beginPointCell, finalPointCell));;
    }, []);

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="path-grid-container my-5 d-flex justify-content-center">
                    <div className="col-md-9 d-flex flex-wrap justify-content-center flex-column">
                        {Object.keys(matrix).length !== 0 ? rowBuilder(rowCount, columnCount) : ''}
                    </div>
                </div>
            </DragDropContext>
        </>
    )

}

export default PathGridContainer;