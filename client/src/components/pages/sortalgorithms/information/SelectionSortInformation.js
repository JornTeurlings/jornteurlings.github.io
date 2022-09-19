const SelectionSortInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Selection Sort algorithm is an algorithm that has two different parts: a sorted and unsorted part. It differs from the Insertion Sort is that it does not take a random value from the unsorted array, but always the minimum value. 
                    When this value is found it places it at the end of the sorted part. 
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Selection Sort</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(N ^2)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Stability</td>
                            <td>Not Stable</td>
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

export default SelectionSortInformation;