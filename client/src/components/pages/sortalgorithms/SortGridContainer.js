import GraphBar from "./GraphBar"
import { useEffect, useState } from 'react';
import './algorithms/mergeSort';

const SortGridContainer = (props) => {
    const [currentArray, setCurrentArray] = useState([]);

    const generateArray = () => {
        const getRandomValue = () => {
            const value = Math.floor(Math.random() * (99) + 1);
            return value;
        }
        const fit  = window.innerWidth * 0.75;
        let amount = Math.floor(fit / 6);
        const array = new Array(amount).fill(0).map(() => getRandomValue());
        setCurrentArray(array);
    }

    const renderBars = () => {

        return currentArray.map(value => (
            <GraphBar height={value} />
        ))
    }

    useEffect(() => {
        generateArray();
        props.setShuffle(false);
    }, [props.shuffle])

    return (
        <div id="content-height" className="my-5 d-flex justify-content-center flex-grow-1">
            <div  className="col-md-9 d-flex flex-wrap bar-chart-sort">
                {renderBars()}
            </div>
        </div>
    )
}

export default SortGridContainer;