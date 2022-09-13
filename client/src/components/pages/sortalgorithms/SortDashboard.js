import './css/SortDashboard.css';

import mergeSortWrapper from './algorithms/mergeSort';
import selectionSortWrapper from './algorithms/selectionSort';
import bubbleSortWrapper from './algorithms/bubbleSort';
import insertionSortWrapper from './algorithms/insertionSort';

import SortNavigation from "./SortNavigation";
import SortGridContainer from "./SortGridContainer";
import { useState, useEffect } from 'react';

const runAlgorithm = async (array, algorithm = 'merge', setArray, setColorsArray) => {
    let sortedArr = [];
    switch (algorithm) {
        case 'merge':
            await mergeSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, 10);
            break;
        case 'selection':
            await selectionSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, 10)
            break;
        case 'bubble':
            await bubbleSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, 10);
            break;
        case 'insertion':
            await insertionSortWrapper(array, 0, (array.length - 1), setArray, setColorsArray, 10);
            break;
    }
}

const SortDashboard = () => {
    const [shuffle, setShuffle] = useState(false);
    const [currentArray, setCurrentArray] = useState([]);
    const [colorsArray, setColorsArray] = useState([]);


    const generateArray = () => {
        const getRandomValue = () => {
            const value = Math.floor(Math.random() * (99) + 1);
            return value;
        }
        const fit  = window.innerWidth * 0.75;
        let amount = Math.floor(fit / 6);
        const array = new Array(amount).fill(0).map(() => getRandomValue());
        const colorArray = new Array(amount).fill(0);
        setCurrentArray(array); 
        setColorsArray(colorArray);
    }

    const onAlgorithmRunClick = async (algorithm) => {
       await runAlgorithm(currentArray, algorithm, setCurrentArray, setColorsArray);
    }

    useEffect(() => {
        generateArray();
        setShuffle(false);
    }, [shuffle])


    return (
        <div className="col-md-12 d-flex  flex-column m-auto h-100">
            <SortNavigation setShuffle={setShuffle} onAlgorithmRunClick={onAlgorithmRunClick}/>
            <SortGridContainer array={currentArray} colorsArray={colorsArray} setArray={setCurrentArray} shuffle={shuffle} setShuffle={setShuffle}/>
        </div>
    )
}

export default SortDashboard;