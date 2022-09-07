import PathGridBox from "./PathGridBox";
import PathGridPoint from "./PathGridPoint";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState, useCallback } from "react";
import { ItemTypes } from "../../../constants/ItemTypes";

const gridBuilder = (rowCount, columnCount) => {
    const totalSquares = rowCount * columnCount;
    const grid = {};
    for (let key = 1; key <= totalSquares; key++) {
        const squareDetails = {
            active: false,
            obstacle: false,
            start: false,
            finish: false,
        }

        grid[key] = squareDetails
    }

    return grid;
}

const PathGridContainer = () => {
    // const [columnCount, rowCount] = useRowCount();
    const columnCount = 40;
    const rowCount = 25;
    const [matrix, setMatrix] = useState(gridBuilder(rowCount, columnCount));
    const [, updateState] = useState();
    const [beginPointCell, setBeginPointCell] = useState(500);
    const [finalPointCell, setFinalPointCell] = useState(585);
    const forceUpdate = useCallback(() => updateState({}), []);

    
    const onClick = (event) => {
        const id = event.target.id; 
        const matrixNew = matrix;
        matrixNew[id].active = !matrixNew[id].active;
        setMatrix(matrixNew); 
    }


    const rowBuilder = (rowIndex, columnIndex, rows = []) => {
        if (rowIndex > 0) {
            const squareKey = rowIndex * columnIndex; 
            rows.push(squareBuilder(squareKey, rowIndex, columnIndex));
            return rowBuilder(rowIndex - 1, columnIndex, rows);
        }

        return rows;
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
                active={square.active}
                obstacle={square.active}
                handleClick={(event) => {
                    onClick(event);
                    forceUpdate();
                }}
                children={child}
                />
                )
            return squareBuilder(squareKey - 1, rowIndex, columnIndex - 1, row);
        }

        return (<div key={`row-${rowIndex}`}>{row}</div>);
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            if (result.draggableId === ItemTypes.BEGIN) {
                setBeginPointCell(parseInt(destination.droppableId));
            } else if (result.draggableId === ItemTypes.FINISH) {
                setFinalPointCell(parseInt(destination.droppableId));
            }
            
        }
        
    }

    console.log(matrix);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="path-grid-container my-5 d-flex justify-content-center">
                <div className="col-md-9 d-flex flex-wrap">
                    {rowBuilder(rowCount, columnCount)}
                </div>
            </div>
        </DragDropContext>
    )

}

export default PathGridContainer;