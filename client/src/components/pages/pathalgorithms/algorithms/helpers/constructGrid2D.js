/*
    Constructing the 2D Grid for better visualitation and an actual grid
    Make a list of the unvisited nodes for the dijkstra algorithm

    params: original grid, number of rows, number of columns
    return: [list of unvisited nodes, 2d grid]

*/

export const constructGrid2D = (grid, rowCount, columnCount) => {
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
