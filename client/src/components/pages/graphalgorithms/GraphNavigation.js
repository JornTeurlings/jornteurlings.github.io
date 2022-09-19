
const GraphNavigation = (props) => {
    const onRunClick = () => {
        props.onAlgorithmRunClick('dijkstra');
    }

    const onShuffleClick = () => {
        props.setShuffle(true);
    }

    return (
        <div className="m-auto my-3 px-5 d-flex w-75 justify-content-center navigation-path-algorithm">
            <div className='d-flex ms-2'>
                <p className="m-auto nav-path-algorithm-text">Algorithm: </p>
                <select onChange={() => props.setAlgorithm((document.getElementById('select-graph-algorithm')).value)} id="select-graph-algorithm" className="mx-3 custom-algorithm-select form-select" defaultValue="prim" disabled={props.disabled}>
                    <option value="dijkstra">Dijkstra's Algorithm</option>
                    <option value="bellman">Belmann-Ford Algorithm</option>
                    <option value="floyd">Floyd-Warshall Algorithm</option>
                    <option value="prim">Prim's Algorithm</option>
                </select>
            </div>
            <button onClick={onRunClick} disabled={props.disabled} className="btn run-path-algorithm mx-3" type="button">Run Algorithm</button>
            {/* <button className="btn btn-warning mx-3" type="button">Example Grid</button> */}
            <button onClick={onShuffleClick} disabled={props.disabled} className="btn reset-path-algorithm mx-3" type="button">New Graph</button>
            <div className="d-flex flex-column">
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
            <button onClick={() => props.setShowModal(true)} className="btn info-button ms-2" type="button"><i className="fa-solid fa-info"/></button>

        </div>
    )

}

export default GraphNavigation;