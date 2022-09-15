import promiseTimeout from '../../../../helpers/promiseTimeout';
import { swap } from'../../../../helpers/swap.js';

let arr = []

const countingSort = async (start, end, setArray, setColorsArray, visualizationSpeed) => {
    let newColorsArray = [];
    let countArray = new Array(100).fill(0);
    for (let j = start; j <= end; j++) {
        newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray.concat());
        await promiseTimeout({timeout: visualizationSpeed});

        countArray[arr[j]]++;
    }

    let j = 0;
    for (let i = 0; i < countArray.length; i++) {
        let value = countArray[i];
        while (value > 0) {
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[j] = 2;
            setArray(arr);
            setColorsArray(newColorsArray.concat());
            await promiseTimeout({timeout: visualizationSpeed});
            arr[j] = i;
            j++;
            value--;
        }
    }
}

const countingSortWrapper = async (array, start, end, setArray, setColorsArray, visualizationSpeed) => {
    arr = array.concat();
    await countingSort(start, end, setArray, setColorsArray, visualizationSpeed);
}

export default countingSortWrapper;