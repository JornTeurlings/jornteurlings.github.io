import '../css/GraphInformation.css';

const GraphInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>Graph algorithms are the algorithms that are used on graphs consisting of nodes and edges. With these algorithms, things such as shortest paths and more can be found and used for future purposes. They are used 
                    to represent networks, which can have real-life applications such as roads in a city or social media networks.
                </p>
                <p>
                    A random network is created which can be changed and altered through the addition of nodes and edges. Select the desired algorithm and let it run. If helpful, a table is shown with important information that is being used to complete
                    the algorithm. To select the starting node, click the edit button. Then click on a node and then the edit node button. This will give a pop up to choose whether
                    you want to select this as the starting node.
                </p>
            </div>
            <div className="col-md-10 m-auto d-flex flex-row justify-content-around my-5">
                <div className='d-flex my-2'>
                    <div className="node-information" style={{ backgroundColor: '#6f74a1'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= node</p>
                </div>
                <div className='d-flex my-2'>
                    <div className='line-information align-self-center' style={{backgroundColor: '#6f74a1'}}>

                    </div>
                    <p className="align-self-end my-0 mx-1">= edge</p>
                </div>
                <div className='d-flex my-2'>
                    <p className="align-self-end my-0 mx-1">7 = weight of edge</p>
                </div>
            </div>
        </div>
    )
}

export default GraphInformation;