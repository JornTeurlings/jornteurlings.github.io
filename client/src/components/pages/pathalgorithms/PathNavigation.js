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
        <div className="m-auto my-3 d-flex w-50 justify-content-center">
            <select id="select-path-algorithm" className="mx-3 custom-algorithm-select" defaultValue="dijkstra">
                <option disabled>Select Algorithm</option>
                <option value="dijkstra">Dijkstra's Algorithm</option>
                <option value="astar">A* Algorithm</option>
            </select>
            <button onClick={onRunClick} className="btn btn-info mx-3" type="button">Run Algorithm</button>
            <button className="btn btn-warning mx-3" type="button">Example Grid</button>
            <button onClick={onResetClick} className="btn btn-primary mx-3" type="button">Reset Grid</button>
        </div>
    )

}

export default PathNavigation;