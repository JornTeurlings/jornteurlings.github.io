import './css/ContentContainer.css';
import { Routes, Route, Navigate, useLocation} from 'react-router-dom';
import PathDashboard from '../pages/pathalgorithms/PathDashboard';
import SortDashboard from '../pages/sortalgorithms/SortDashboard';
import GraphDashboard from '../pages/graphalgorithms/GraphDashboard';


const ContentContainer = (props) => {
    const location = useLocation();

    return (
        <div className='content-container'>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/path-algorithms" element={<PathDashboard />} />
                <Route exact path="/graph-algorithms" element={<GraphDashboard />} />
                <Route exact path="/searching-and-sorting" element={<SortDashboard />}  />
                <Route path="*" element={<Navigate to="/path-algorithms" />} />
            </Routes>
        </div>
    )
}

export default ContentContainer;