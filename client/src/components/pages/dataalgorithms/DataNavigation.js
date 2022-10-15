import '../pathalgorithms/css/PathNavigation.css';

const DataNavigation = (props) => {
    const onRunClick = () => {
        const algorithm = (document.getElementById('select-data-algorithm')).value;
        props.onAlgorithmRunClick(algorithm);
    }

    const onResetClick = () => {
        props.onResetClick();
    }

    return (
        <div className="m-auto my-3 px-5 d-flex w-75 justify-content-center navigation-path-algorithm">
            <div className='d-flex'>
                <p className="m-auto nav-path-algorithm-text">Algorithm: </p>
                <select disabled={props.active} id="select-data-algorithm" className="mx-3 custom-algorithm-select form-select" defaultValue="huffman">
                    <option value="huffman">Huffman Encoding</option>
                </select>
            </div>
            <button disabled={props.active} onClick={onRunClick} className="btn run-path-algorithm mx-3" type="button">Run Algorithm</button>
            <button onClick={() => props.setShowModal(true)} className="btn info-button ms-2" type="button"><i className="fa-solid fa-info"/></button>
        </div>
    )

}

export default DataNavigation;