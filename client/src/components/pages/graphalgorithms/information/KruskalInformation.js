const KruskalInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>Kruskal's Algorithm finds a minimum spanning forest of an undirected edge-weighted graph. In case the graph is connected, it finds a minimum spanning tree. It differs from Prim's Algorithm in that it
                    looks for the lowest weighted edges and not the distances from the vertex at which it is at. 
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Kruskal's Algorithm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(E log(V))</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(E+V)</td>
                        </tr>
                        <tr>
                            <td>Guaranteed Minimum Spanning Tree</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KruskalInformation;