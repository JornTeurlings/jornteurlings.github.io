import promiseTimeout from '../../../../helpers/promiseTimeout';

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

const mergeSort = async (start, end, setArray, setColorsArray, visualizationSpeed ) => {
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);
  await mergeSort(start, mid, setArray, setColorsArray, visualizationSpeed);
  await mergeSort(mid + 1, end, setArray, setColorsArray, visualizationSpeed);

  await merge(start, mid, end, setArray, setColorsArray, visualizationSpeed);
};

const mergeSortWrapper = async (
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
) => {
    console.log(array);
  arr = array.concat();

  await mergeSort(
    leftIndex,
    rightIndex,
    setArray,
    setColorsArray,
    visualizationSpeed
  );
    setColorsArray((new Array(arr.length)).fill(3));

};

export default mergeSortWrapper;