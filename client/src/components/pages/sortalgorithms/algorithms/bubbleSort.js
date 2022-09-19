import promiseTimeout from '../../../../helpers/promiseTimeout';
import { swap } from'../../../../helpers/swap.js';

let arr = []

const bubbleSort = async (start, end, setArray, setColorsArray, visualizationSpeed) => {
    let newColorsArray = [];
    for (let j = end; j >= start; j--) {
        for (let i = 0; i <= j; i++) {
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[i] = 1;
            newColorsArray[i+1] = 2;
            setColorsArray(newColorsArray);
            await promiseTimeout({timeout: visualizationSpeed});
            if (arr[i] > arr[i + 1]) {
                swap(i, i + 1, arr);
                setArray(arr);
                await promiseTimeout({timeout: visualizationSpeed});
            }
        }
    }
}

const bubbleSortWrapper = async (array, start, end, setArray, setColorsArray, visualizationSpeed) => {
    arr = array.concat();
    await bubbleSort(start, end, setArray, setColorsArray, visualizationSpeed);
}

export default bubbleSortWrapper;