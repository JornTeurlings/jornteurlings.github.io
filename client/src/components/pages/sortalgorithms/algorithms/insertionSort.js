import promiseTimeout from '../../../../helpers/promiseTimeout';
import { swap } from'../../../../helpers/swap.js';

let arr = []

const insertionSort = async (start, end, setArray, setColorsArray, visualizationSpeed) => {
    let newColorsArray = [];
    for (let j = 0; j <= end; j++) {
        for (let i = j - 1; i >= 0; i--) {
            if (i < 0) {
                continue;
            }
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[j] = 1;
            newColorsArray[i] = 2;
            setColorsArray(newColorsArray);
            await promiseTimeout({timeout: visualizationSpeed});

            if (i == 0 && arr[j] < arr[i]) {
                arr.splice(0, 0, arr[j])
                arr.splice(j+1, 1);
                setArray(arr);
            } else if (arr[i] <= arr[j]) {
                arr.splice(i + 1, 0, arr[j]);
                arr.splice(j+1, 1);
                setArray(arr);
                break;
            } else {
                continue;
            }
        }
    }
}

const insertionSortWrapper = async (array, start, end, setArray, setColorsArray, visualizationSpeed) => {
    arr = array.concat();
    await insertionSort(start, end, setArray, setColorsArray, visualizationSpeed);

}

export default insertionSortWrapper;