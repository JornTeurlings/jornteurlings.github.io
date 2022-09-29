import promiseTimeout from '../../../../helpers/promiseTimeout';
import { swap } from '../../../../helpers/swap';

let arr = [];

const quickSort = async (start, end, setArray, setColorsArray, visualizationSpeed ) => {
    if (start >= end) return;
    let i = start, j = end;
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