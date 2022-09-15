
const SortNavigation = (props) => {
    const onRunClick = () => {
        props.onAlgorithmRunClick();
    }

    const onShuffleClick = () => {
        props.setShuffle(true);
    }

    return (
        <div className="m-auto my-3 d-flex w-50 justify-content-space-around navigation-path-algorithm">
            <div className='d-flex'>
                <p className="m-auto nav-path-algorithm-text">Select an Algorithm: </p>
                <select onChange={() => props.setAlgorithm((document.getElementById('select-sort-algorithm')).value)} id="select-sort-algorithm" className="mx-3 custom-algorithm-select" defaultValue="merge" disabled={props.disabled}>
                    <option value="merge">Merge Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="bubble">Bubble Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="binary">Binary Search Algorithm</option>
                    <option value="counting">Counting Sort Algorithm</option>
                </select>
            </div>
            <button onClick={onRunClick} disabled={props.disabled} className="btn run-path-algorithm mx-3" type="button">Run Algorithm</button>
            {/* <button className="btn btn-warning mx-3" type="button">Example Grid</button> */}
            <button onClick={onShuffleClick} disabled={props.disabled} className="btn reset-path-algorithm mx-3" type="button">Shuffle Data</button>
            <div>
                <label for="visualization-speed" className="form-label" style={{color: 'white'}}>Visualization Speed</label>
                <input 
                onChange={() => props.setSpeed(document.getElementById('visualization-speed').value)} 
                id="visualization-speed" 
                min="1" 
                max="5" 
                step="2"
                className="form-range custom-range-slider" 
                type="range"
                />
            </div>
        </div>
    )

}

export default SortNavigation;