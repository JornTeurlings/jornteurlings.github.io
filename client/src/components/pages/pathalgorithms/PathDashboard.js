import PathNavigation from "./PathNavigation";
import PathGridContainer from "./PathGridContainer";
import { useState } from "react";

const PathDashboard = () => {
    const [runAlgorithm, setRunAlgorithm] = useState(false);
    const [activeAlgorithm, setActiveAlgorithm] = useState('dijkstra');

    const onAlgorithmRunClick = (algorithm) => {
        setActiveAlgorithm(algorithm);
        setRunAlgorithm(true);
    }

    const onResetClick = () => {
        setRunAlgorithm(false);
    }

    return (
        <div className="col-md-12 d-flex justify-content-center flex-column m-auto">
            <PathNavigation onAlgorithmRunClick={onAlgorithmRunClick} onResetClick={onResetClick}/>
            <PathGridContainer active={runAlgorithm} algorithm={activeAlgorithm} />
        </div>
    )
}

export default PathDashboard;