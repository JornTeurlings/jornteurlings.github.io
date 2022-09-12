import './css/PathNavigation.css';

const PathNavigation = (props) => {
    const onRunClick = () => {
        const algorithm = (document.getElementById('select-path-algorithm')).value;
        props.onAlgorithmRunClick(algorithm);
    }

    const onResetClick = () => {
        props.onResetClick();
    }

    return (
        <div className="m-auto my-3 d-flex w-50 justify-content-center navigation-path-algorithm">
            <div className='d-flex'>
                <p className="m-auto nav-path-algorithm-text">Select an Algorithm: </p>
                <select id="select-path-algorithm" className="mx-3 custom-algorithm-select" defaultValue="dijkstra">
                    <option value="dijkstra">Dijkstra's Algorithm</option>
                    <option value="astar">A* Algorithm</option>
                    <option value="bfs">Breadth First Search</option>
                </select>
            </div>
            <button onClick={onRunClick} className="btn run-path-algorithm mx-3" type="button">Run Algorithm</button>
            {/* <button className="btn btn-warning mx-3" type="button">Example Grid</button> */}
            <button onClick={onResetClick} className="btn reset-path-algorithm mx-3" type="button">Reset Grid</button>
        </div>
    )

}

export default PathNavigation;