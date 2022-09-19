const FloydInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Floyd Warshall algorithm is  another shortest path algorithm that is used in a directed weighted graph, but it can contain negative weights. However, it cannot contain negative cycles (cycles in which the 
                    total value of traversing the cycle is negative). It computes the shortest path between every pair of vertices in the entire network. It does this by checking for each connection all the possible connections to each other. 
                    A node can directly connect to another node but it can also traverse through another node to that specific node is that is shorter. 
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Floyd-Warshall Algorithm </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(V^3)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(V^2)</td>
                        </tr>
                        <tr>
                            <td>Guaranteed shortest path</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FloydInformation;