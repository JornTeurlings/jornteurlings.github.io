import './css/SortDashboard.css';

import mergeSortWrapper from './algorithms/mergeSort';
import selectionSortWrapper from './algorithms/selectionSort';
import bubbleSortWrapper from './algorithms/bubbleSort';
import insertionSortWrapper from './algorithms/insertionSort';
import quickSortWrapper from './algorithms/quickSort';
import countingSortWrapper from './algorithms/countingSort';

import SortNavigation from "./SortNavigation";
import SortGridContainer from "./SortGridContainer";
import { useState, useEffect } from 'react';
import binarySearchWrapper from './algorithms/binarySearchAlgorithm';

const runAlgorithm = async (array, algorithm = 'merge', setArray, setColorsArray, visualizationSpeed, searchValue = 0) => {
    visualizationSpeed = (200) / (2 ** visualizationSpeed)
    switch (algorithm) {
        case 'merge':
            await mergeSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed);
            break;
        case 'selection':
            await selectionSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed)
            break;
        case 'bubble':
            await bubbleSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed);
            break;
        case 'insertion':
            await insertionSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed);
            break;
        case 'quick':
            await quickSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed);
            break;
        case 'binary':
            await binarySearchWrapper(array, searchValue, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed);
            break;
        case 'counting':
            await countingSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, visualizationSpeed);
            break;
        default:
            break;
    }
}

const SortDashboard = () => {
    const [shuffle, setShuffle] = useState(false);
    const [currentArray, setCurrentArray] = useState([]);
    const [colorsArray, setColorsArray] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const [algorithm, setAlgorithm] = useState(null);
    const [algorithmRunning, setAlgorithmRunning] = useState(false);
    const [speed, setSpeed] = useState(2);

    const generateArray = (ordered = false) => {
        const getRandomValue = () => {
            const value = Math.floor(Math.random() * (99) + 1);
            return value;
        }
        const fit  = window.innerWidth * 0.65;
        let amount = Math.floor(fit / 6);
        let array = new Array(amount).fill(0).map(() => getRandomValue());
        if (ordered) {
            array = array.sort(function(a, b){return a-b});
        }
    
        const colorArray = new Array(amount).fill(0);
        setCurrentArray(array); 
        setColorsArray(colorArray);
    }

    const onAlgorithmRunClick = async () => {
        if (algorithm === 'binary') {
            if (searchValue === null) {
                return;
            }
        }
        setAlgorithmRunning(true);
        await runAlgorithm(currentArray, algorithm, setCurrentArray, setColorsArray, speed, searchValue);
        setAlgorithmRunning(false);
    }

    useEffect(() => {
        if (algorithm === 'binary') {
            generateArray(true);
        } else {
            generateArray();
        }
    }, [algorithm])

    useEffect(() => {
        if (algorithm === 'binary') {
            generateArray(true);
        } else {
            generateArray();
        }
        
        setShuffle(false);
    }, [shuffle])


    return (
        <div className="col-md-12 d-flex  flex-column m-auto h-100">
            <SortNavigation 
            disabled={algorithmRunning} 
            setSpeed={setSpeed} 
            setAlgorithm={setAlgorithm}
            setShuffle={setShuffle}
            onAlgorithmRunClick={onAlgorithmRunClick}
            />
            <SortGridContainer 
            setSearchValue={setSearchValue} 
            array={currentArray} 
            colorsArray={colorsArray} 
            setArray={setCurrentArray} 
            shuffle={shuffle} 
            setShuffle={setShuffle}
            />
        </div>
    )
}

export default SortDashboard;