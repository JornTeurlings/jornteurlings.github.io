const PrimInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Prim Algorithm is an minimum spanning tree algorithm that given a network calculates the minimum spanning tree. It computes the spanning tree from a given source. It checks from a given node the valid neighbours that are not yet in the 
                    minimum spanning tree. Then it calculates the heuristic to these nodes and from a minimum spanning queue retrieves the next key to put in the tree. It does this until there are no more vertices to put in the tree.  
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Prim Algorithm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(V^2)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(V)</td>
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

export default PrimInformation;