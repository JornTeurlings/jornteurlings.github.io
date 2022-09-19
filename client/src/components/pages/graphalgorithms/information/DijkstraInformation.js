const DijkstraInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Dijkstra Algorithm is a shortest path algorithm that is used to compute the shortest path from a source to one or multiple destinations in a (un)directed weighted graph.
                    It uses a prioritity queue and keeps track of the nodes that it has visited already.
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Dijkstra Algorithm </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(E log (V))</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(V)</td>
                        </tr>
                        <tr>
                            <td>Guaranteed shortest Path</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DijkstraInformation;