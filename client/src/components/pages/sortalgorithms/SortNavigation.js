
const SortNavigation = (props) => {
    const onRunClick = () => {
        const algorithm = (document.getElementById('select-sort-algorithm')).value;
        props.onAlgorithmRunClick(algorithm);
    }

    const onShuffleClick = () => {
        props.setShuffle(true);
    }

    return (
        <div className="m-auto my-3 d-flex w-50 justify-content-center navigation-path-algorithm">
            <div className='d-flex'>
                <p className="m-auto nav-path-algorithm-text">Select an Algorithm: </p>
                <select id="select-sort-algorithm" className="mx-3 custom-algorithm-select" defaultValue="merge">
                    <option value="merge">Merge Sort</option>
                </select>
            </div>
            <button onClick={onRunClick}  className="btn run-path-algorithm mx-3" type="button">Run Algorithm</button>
            {/* <button className="btn btn-warning mx-3" type="button">Example Grid</button> */}
            <button onClick={onShuffleClick} className="btn reset-path-algorithm mx-3" type="button">Shuffle Data</button>
        </div>
    )

}

export default SortNavigation;