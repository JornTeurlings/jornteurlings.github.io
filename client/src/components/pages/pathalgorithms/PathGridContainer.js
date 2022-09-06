import PathGridBox from "./PathGridBox";
import PathGridPoint from "./PathGridPoint";
import { useEffect, useState, useCallback } from "react";

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
    const [beginPointCell, setBeginPointCell] = useState(1000);
    const [finalPointCell, setFinalPointCell] = useState([1, 1]);
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
                child = <PathGridPoint />
            }
            row.push(<PathGridBox
                setNewPoint={setBeginPointCell}
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

    return (
        <div className="path-grid-container my-5 d-flex justify-content-center">
            <div className="col-md-9 d-flex flex-wrap">
                {rowBuilder(rowCount, columnCount)}
            </div>
        </div>
    )

}

export default PathGridContainer;