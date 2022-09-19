import PathInformation from './information/PathInformation';
import PathNavigation from "./PathNavigation";
import PathGridContainer from "./PathGridContainer";
import { useState } from "react";
import InfoModal from "../../components/InfoModal";

const PathDashboard = () => {
    const [runAlgorithm, setRunAlgorithm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [resetGrid, setResetGrid] = useState(false);
    const [activeAlgorithm, setActiveAlgorithm] = useState('dijkstra');

    const onAlgorithmRunClick = (algorithm) => {
        setActiveAlgorithm(algorithm);
        setRunAlgorithm(true);
    }

    const onResetClick = () => {
        setResetGrid(true);     
    }

    return (
        <div className="col-md-12 d-flex justify-content-center flex-column m-auto">
            <PathNavigation onAlgorithmRunClick={onAlgorithmRunClick} setShowModal={setShowModal} onResetClick={onResetClick} active={runAlgorithm}/>
            <PathGridContainer active={runAlgorithm} reset={resetGrid} setReset={setResetGrid} setActive={setRunAlgorithm} algorithm={activeAlgorithm} />
            <InfoModal 
                show={showModal}
                handleClose={() => setShowModal(false)}
                infoCurrentPage={<PathInformation />}
            />
        </div>
    )
}

export default PathDashboard;