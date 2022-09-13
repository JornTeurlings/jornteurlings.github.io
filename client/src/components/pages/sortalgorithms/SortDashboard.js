import './css/SortDashboard.css';

import SortNavigation from "./SortNavigation";
import SortGridContainer from "./SortGridContainer";
import { useState } from 'react';

const SortDashboard = () => {
    const [shuffle, setShuffle] = useState(false);

    return (
        <div className="col-md-12 d-flex  flex-column m-auto h-100">
            <SortNavigation setShuffle={setShuffle}/>
            <SortGridContainer shuffle={shuffle} setShuffle={setShuffle}/>
        </div>
    )
}

export default SortDashboard;