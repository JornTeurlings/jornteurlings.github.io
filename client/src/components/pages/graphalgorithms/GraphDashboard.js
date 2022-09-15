
import GraphNavigation from './GraphNavigation';
import GraphContainer from './GraphContainer';
import { useState, useEffect } from 'react';

const runAlgorithm = async (array, algorithm = 'merge', setArray, setColorsArray, visualizationSpeed, searchValue = 0) => {
    visualizationSpeed = (200) / (2 ** visualizationSpeed)
    switch (algorithm) {
        default:
            break;
    }
}

const GraphDashboard = () => {
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
            <GraphNavigation  />
            <GraphContainer />
        </div>
    )
}

export default GraphDashboard;