export const swap = (first, second, arr) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}