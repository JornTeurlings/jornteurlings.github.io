import promiseTimeout from "../../../../helpers/promiseTimeout";

let arr = [];

const merge = async (start, mid, end, setArray, setColorsArray, colorsArray) => {
    let i = start, j = mid + 1, it = 0;
    let sortedArr = new Array(end - start + 1);
    let newColorsArray = colorsArray.slice(0);

    while (i <= mid && j <= end) {
        newColorsArray[i] = 2;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray);
        await promiseTimeout({timeout: 200})
        newColorsArray[i] = 0;
        newColorsArray[j] = 0;

        if (arr[i] > arr[j]) {
            sortedArr[it] = arr[j];
            j++;
        } else {
            sortedArr[it] = arr[i];
            i++;
        }
        it++;
    }

    while (i <= mid) {
        newColorsArray[i] = 2;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray);
        await promiseTimeout({timeout: 200})
        newColorsArray[i] = 0;
        newColorsArray[j] = 0;

        sortedArr[it] = arr[i];
        it++;
        j++;
    }

    while (j <= end) {
        newColorsArray[i] = 2;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray);
        await promiseTimeout({timeout: 200})
        newColorsArray[i] = 0;
        newColorsArray[j] = 0;

        sortedArr[it] = arr[j];
        it++;
        j++;
    }


    it = 0;
    for (let k = start; k < end; k++, it++) {
        arr[k] = sortedArr[it];
        newColorsArray[k] = 1;
        setArray(arr.concat());
        setColorsArray(newColorsArray);
        await promiseTimeout({timeout: 200})
        newColorsArray[k] = 0;
    }
}

const mergeSort = async (start, end, setArray, setColorsArray, colorsArray) => {
    if ((end-start) < 1) return;
    let mid = Math.floor((start + end) / 2);

    mergeSort(start, mid, setArray, setColorsArray, colorsArray);
    mergeSort(mid + 1, end, setArray, setColorsArray, colorsArray);

    merge(start, mid, end, setArray, setColorsArray, colorsArray);
}

const mergeSortWrapper = async (array, start, end, setArray, setColorsArray, colorsArray) => {
    arr = array.slice(0);

    await mergeSort(start, end, setArray, setColorsArray, colorsArray);
}

export default mergeSortWrapper;