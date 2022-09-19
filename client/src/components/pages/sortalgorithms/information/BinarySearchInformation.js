const BinarySearchInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Binary Search Algorithm is an algorithm that operates on a sorted array of values to find the indicated value. It checks to see if the indicated value is smaller, larger or equal to the center value of the array. 
                    Based on this knowledge, it takes a subarray of values where it could potentially be. This continues until it finds the first value that has an equal value to the requested value. Therefore it might not find the particular instance that is
                    clicked but one with an equal value.
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Binary Search</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(log (N))</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(N)</td>
                        </tr>
                        <tr>
                            <td>Stability</td>
                            <td>Not applicable</td>
                        </tr>
                        <tr>
                            <td>Recursive</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BinarySearchInformation;