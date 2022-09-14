import './css/SortDashboard.css';

import mergeSortWrapper from './algorithms/mergeSort';
import selectionSortWrapper from './algorithms/selectionSort';
import bubbleSortWrapper from './algorithms/bubbleSort';
import insertionSortWrapper from './algorithms/insertionSort';

import SortNavigation from "./SortNavigation";
import SortGridContainer from "./SortGridContainer";
import { useState, useEffect } from 'react';

const runAlgorithm = async (array, algorithm = 'merge', setArray, setColorsArray, visualizationSpeed) => {
    let sortedArr = [];
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
    }
}

const SortDashboard = () => {
    const [shuffle, setShuffle] = useState(false);
    const [currentArray, setCurrentArray] = useState([]);
    const [colorsArray, setColorsArray] = useState([]);
    const [algorithmRunning, setAlgorithmRunning] = useState(false);
    const [speed, setSpeed] = useState(2);

    const generateArray = () => {
        const getRandomValue = () => {
            const value = Math.floor(Math.random() * (99) + 1);
            return value;
        }
        const fit  = window.innerWidth * 0.65;
        let amount = Math.floor(fit / 6);
        const array = new Array(amount).fill(0).map(() => getRandomValue());
        const colorArray = new Array(amount).fill(0);
        setCurrentArray(array); 
        setColorsArray(colorArray);
    }

    const onAlgorithmRunClick = async (algorithm) => {
        setAlgorithmRunning(true);
        await runAlgorithm(currentArray, algorithm, setCurrentArray, setColorsArray, speed);
        setAlgorithmRunning(false);
    }

    useEffect(() => {
        generateArray();
        setShuffle(false);
    }, [shuffle])

    return (
        <div className="col-md-12 d-flex  flex-column m-auto h-100">
            <SortNavigation disabled={algorithmRunning} setSpeed={setSpeed} setShuffle={setShuffle} onAlgorithmRunClick={onAlgorithmRunClick}/>
            <SortGridContainer array={currentArray} colorsArray={colorsArray} setArray={setCurrentArray} shuffle={shuffle} setShuffle={setShuffle}/>
        </div>
    )
}

export default SortDashboard;