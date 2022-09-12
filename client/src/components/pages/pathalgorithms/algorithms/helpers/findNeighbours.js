export const findNeighbours = (startRow, startCol, rowCount, columnCount) => {
    let neighboursUnfiltered = [
        startRow - 1 >= 0 ? [startRow - 1 , startCol] : [],
        startRow + 1 < rowCount ? [startRow + 1, startCol] : [],
        startCol - 1 >= 0 ? [startRow , startCol - 1] : [],
        startCol + 1 < columnCount ? [startRow , startCol + 1] : []
    ];
    return neighboursUnfiltered;
}