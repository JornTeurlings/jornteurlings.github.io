const InsertionSortInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Insertion Sort algorithm has two parts of the array that it keeps track of: a sorted and unsorted part. The way the algorithm works is that a value from the unsorted part is taken and inserted at the right place in the sorted
                    part of the algorithm until the unsorted part is empty, which would conclude the algorithm.
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Insertion Sort</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(N^2)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Stability</td>
                            <td>Stable</td>
                        </tr>
                        <tr>
                            <td>Recursive</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InsertionSortInformation;