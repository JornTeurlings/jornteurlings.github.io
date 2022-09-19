const BubbleSortInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Bubble Sort algorithm is an algorithm that basically functions as a bubble in water: it bubbles elements based which have a higher value to the end of the array. If the element is higher than the element to the right, it bubbles to the right. In this manner, the 
                    highest values in the array are bubbled to the right to the array. In is the complete reverse of the Selection Sort algorithm which selects the minimum value whereas the Bubble Sort looks for the maximum value. 
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bubble Sort</th>
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

export default BubbleSortInformation;