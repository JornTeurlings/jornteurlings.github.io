import promiseTimeout from '../../../../helpers/promiseTimeout';
import { swap } from'../../../../helpers/swap.js';

let arr = []

const selectionSort = async (start, end, setArray, setColorsArray, visualizationSpeed) => {
    let newColorsArray = [];
    for (let i = start; i <= end; i++) {
        let minIndex = i;
        let minValue = Number.MAX_SAFE_INTEGER;
        for (let j = i; j <= end; j++) {
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[i] = 1;
            newColorsArray[j] = 2;
            setColorsArray(newColorsArray);
            await promiseTimeout({timeout: visualizationSpeed});

            if (arr[j] < minValue) {
                minValue = arr[j];
                minIndex = j;
            }
        }
        swap(i, minIndex, arr);
        setArray(arr);
        await promiseTimeout({timeout: visualizationSpeed});
    }

}

const selectionSortWrapper = async (array, start, end, setArray, setColorsArray, visualizationSpeed) => {
    arr = array.concat();
    await selectionSort(start, end, setArray, setColorsArray, visualizationSpeed);
}

export default selectionSortWrapper;