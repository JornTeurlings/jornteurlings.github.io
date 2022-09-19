import '../css/PathInformation.css';

const SortingInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>A shortest path algorithm can be used on a grid. This can be done by making a network that is created through wave propagation where the edges between each cell is equal to 1. In such a way the shortest path algorithms can be applied to 
                    these grids.
                </p>
                <p>
                    Decorate your grid with obstacles and move the start and end position to see how the shortest path is computed for each of the algorithms. Click on run algorithm when you are finished with decorating the grid. If you want to compare it with theo
                    other methods, simply switch algorithm when the other one is done and it will be computed for the other algorithm
                </p>
            </div>
            <div className="col-md-10 m-auto d-flex flex-column justify-content-around my-5">
                <div className='d-flex my-2'>
                    <div className="cell-information" style={{ backgroundColor: '#6f74a1'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= obstacle</p>
                </div>
                <div className='d-flex my-2'>
                    <div className='cell-information' style={{backgroundColor: '#0dcaf0'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= area traversed by algorithm</p>
                </div>
                <div className='d-flex my-2'>
                    <div className="cell-information" style={{backgroundColor: '#CCCCFF'}}></div>
                    <p className="align-self-end my-0 mx-1">= cell in shortest path</p>
                </div>
                <div className='d-flex my-2'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="align-self-end my-0 mx-1">= destination</p>
                </div>
                <div className='d-flex my-2'>
                    <i className="fa-solid fa-location-arrow"></i>
                    <p className="align-self-end my-0 mx-1">= start</p>
                </div>
            </div>
        </div>
    )
}

export default SortingInformation