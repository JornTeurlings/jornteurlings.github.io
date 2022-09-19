const MergeSortInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Merge Sort algorithm is a sorting algorithm based on the divide and conquer approach. It splits the array of data into its base values and then merges them together whilst also sorting them. </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Merge Sort</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(N log (N))</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(N)</td>
                        </tr>
                        <tr>
                            <td>Stability</td>
                            <td>Stable</td>
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

export default MergeSortInformation;