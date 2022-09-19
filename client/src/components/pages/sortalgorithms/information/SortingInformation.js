import '../css/SortingInformation.css';

const SortingInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>Sorting algorithms are well known for their various applications, namely sorting arrays of values in an ascending or descending order. Searching algorithms are used to find a specific value in a sorted array of data.</p>
                <p>Select an algorithm and run it and get a new array of data by clicking the shuffle data button. Change the visualization speed by sliding the slider from lowest (left) to highest (right)</p>
            </div>
            <div className="col-md-12 d-flex justify-content-around my-5">
                <div className='d-flex'>
                    <div className="bar-information" style={{ backgroundColor: '#6f74a1'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= data point</p>
                </div>
                <div className='d-flex'>
                    <div className='bar-information' style={{backgroundColor: '#14FFEC'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= algorithm selected valuepoint</p>
                </div>
                <div className='d-flex'>
                    <div className="bar-information" style={{backgroundColor: '#0D7377'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= compared data</p>
                </div>
                <div className='d-flex'>
                    <div className="bar-information" style={{backgroundColor: 'yellow'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= selected data point for value search</p>
                </div>
            </div>
        </div>
    )
}

export default SortingInformation