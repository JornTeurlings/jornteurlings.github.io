import promiseTimeout from '../../../../helpers/promiseTimeout';
import { swap } from '../../../../helpers/swap';

let arr = [];

const merge = async (start, mid, end, setArray, setColorsArray, visualizationSpeed) => {
    let i = start;
    let j = mid + 1;
    let it = 0;
    let tempArr = new Array(end - start + 1);
    let newColorsArray = new Array(arr.length).fill(0);

    while (i <= mid && j <= end) {
        newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[i] = 2;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray.concat());
        await promiseTimeout({timeout: visualizationSpeed});

        if (arr[i] > arr[j]) {
        tempArr[it] = arr[j];
        j++;
        } else {
        tempArr[it] = arr[i];
        i++;
        }

        it++;
    }

    while (i <= mid) {
        newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[i] = 2;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray.concat());
        await promiseTimeout({timeout: visualizationSpeed});

        tempArr[it] = arr[i];
        it++;
        i++;
    }

    while (j <= end) {
        newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[i] = 2;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray.concat());
        await promiseTimeout({timeout: visualizationSpeed});

        tempArr[it] = arr[j];
        it++;
        j++;
    }

    it = 0;
    for (let k = start; k <= end; k++, it++) {
        arr[k] = tempArr[it];
        newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[k] = 1;
        newColorsArray[i - 1] = 2;
        newColorsArray[j - 1] = 2;
        setArray(arr.concat());
        setColorsArray(newColorsArray.concat());
        await promiseTimeout({timeout: visualizationSpeed});
    }
}

const quickSort = async (start, end, setArray, setColorsArray, visualizationSpeed ) => {
    if (start >= end) return;
    let mid = (start + end)/2;
    let i = start, j = end, duplicateOff = 0;
    let newColorsArray = [];

    const pivot = arr[j]; 
    j--;

    while (i <= j) {
        while (arr[i] < pivot) {
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[i] = 2;
            newColorsArray[j] = 2;
            newColorsArray[end] = 1;
            setColorsArray(newColorsArray.concat());
            await promiseTimeout({timeout: visualizationSpeed});
            i++;
        }

        while (arr[j] > pivot) {
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[i] = 2;
            newColorsArray[j] = 2;
            newColorsArray[end] = 1;
            setColorsArray(newColorsArray.concat());
            await promiseTimeout({timeout: visualizationSpeed});
            j--;
        }

        if (i <= j) {
            newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[i] = 2;
            newColorsArray[j] = 2;
            newColorsArray[end] = 1;
            setArray(arr)
            setColorsArray(newColorsArray.concat());
            await promiseTimeout({timeout: visualizationSpeed});
            swap(i, j, arr);
            i++;
            j--;
        }
    }

    const equalPartition = arr.splice(end, 1);
    arr.splice(i, 0, ...equalPartition);
    if (start < i - 1) {
        await quickSort(start, i - 1, setArray, setColorsArray, visualizationSpeed);
    } 
    if (i < end) {
        await quickSort(i + 1, end, setArray, setColorsArray, visualizationSpeed);
    }
    
};

const quickSortWrapper = async (
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
) => {
  arr = array.concat();

  await quickSort(
    leftIndex,
    rightIndex,
    setArray,
    setColorsArray,
    visualizationSpeed
  );

  setArray(arr);
};

export default quickSortWrapper;