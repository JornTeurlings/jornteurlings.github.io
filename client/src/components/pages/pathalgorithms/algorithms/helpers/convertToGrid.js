export const convertToGrid = (newGrid) => {
    let arrayNew = [].concat(...newGrid);
    arrayNew.unshift({'x': 'x'});
    let objectNew = Object.assign({}, arrayNew);
    delete objectNew[0];
    return objectNew;
}