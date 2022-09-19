const CountingSortInformation = () => {
    return (
        <div className="col-md-12">
            <div className="col-md-10 m-auto">
                <p>The Counting Sort algorithm works by knowing the keys in a specific range (therefore ahead of time the values need to be known). It counts the occurence of different keys in the array and based on the amount of a given key inserts them in 
                    the right place back in the array in an incremental order. 
                </p>
            </div>
            <div className="col-md-5 d-flex m-auto my-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Counting Sort</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Complexity</td>
                            <td>O(N)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(N)</td>
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

export default CountingSortInformation;