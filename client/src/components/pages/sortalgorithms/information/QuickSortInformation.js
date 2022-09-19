const QuickSortInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Quick Sort algorithm is an algorithm that is based on the divide and conquer approach. What differs this algorithm from the Merge Sort algorithm is that the computation of the order is done in the dividing of the array in smaller 
                    chunks whereas for Merge Sort this is done in the merging stage. It does this by constantly taking a random value in the array (the pivot) for which it compares the rest of the array. The array is then divided into elements that are 
                    smaller and larger than the pivot. It does this recursively until it reaches the base value which concludes the algorithm since it is sorted.
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Quick Sort</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(N log(N))</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(N log(N))</td>
                        </tr>
                        <tr>
                            <td>Stability</td>
                            <td>Not Stable</td>
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

export default QuickSortInformation;