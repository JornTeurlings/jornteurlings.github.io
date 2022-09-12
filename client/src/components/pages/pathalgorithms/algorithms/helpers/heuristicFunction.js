export const heuristicFunctionAStar = (cell, finish) => {
    return Math.sqrt(Math.pow(cell[0] - finish[0], 2) + Math.pow(cell[1] - finish[1], 2));
}
