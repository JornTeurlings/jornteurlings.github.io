import promiseTimeout from '../../../../helpers/promiseTimeout';

let arr = [];

const binarySearch = async (searchValue, start, end, setArray, setColorsArray, visualizationSpeed ) => {
    if (start > end) {
        return false;
    } else {
        let mid = Math.floor((start + end) / 2);

        let newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[mid] = 2;
        setColorsArray(newColorsArray);
        await promiseTimeout({timeout : visualizationSpeed});

        if (arr[mid] === arr[searchValue]) {
            return mid;
        } else if (arr[searchValue] > arr[mid]) {
            return binarySearch(searchValue, mid + 1, end, setArray, setColorsArray, visualizationSpeed);
        } else {
            return binarySearch(searchValue, start, mid - 1, setArray, setColorsArray, visualizationSpeed);
        }
    }
};

const binarySearchWrapper = async (
  array,
  searchValue,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
) => {
  arr = array.concat();

  const index = await binarySearch(
    searchValue,
    leftIndex,
    rightIndex,
    setArray,
    setColorsArray,
    visualizationSpeed
  );

  let newColorsArray = new Array(arr.length).fill(0);
  newColorsArray[index] = 1;
  setColorsArray(newColorsArray);
  await promiseTimeout({timeout : visualizationSpeed});

};

export default binarySearchWrapper;