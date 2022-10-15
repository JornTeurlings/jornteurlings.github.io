import './css/DataInput.css';

const DataInput = (props) => {
    return (
        <div className="col-md-9 m-auto my-2 d-flex justify-content-center data-input-styling">
            <div className="m-auto w-25 d-flex">
                <label className="me-3">Enter your String</label>
                <input id="data-string" className="form-input flex-grow-1" type="text"/>
            </div>
        </div>
    )
}

export default DataInput;