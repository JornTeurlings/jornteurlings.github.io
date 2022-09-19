const BellmanInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Bellman-Ford algorithm is a shortest path algorithm that computes the shortest path in a weighted graph that contains negative edges but again no negative cycles. 
                    It differs from Dijkstra in terms of performance but this algorithm can take negative weighted edges. Starting from the given node, it checks all the edges in the graph to see
                    whether a path can be constructed that is better than the one before. It checks this a maximum of V - 1 times, since the maximum length in such a graph can be V - 1. 
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bellman-Ford Algorithm </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(V * E)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(E)</td>
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

export default BellmanInformation;