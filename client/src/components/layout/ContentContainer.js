import './css/ContentContainer.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import PathDashboard from '../pages/pathalgorithms/PathDashboard';
import SortDashboard from '../pages/sortalgorithms/SortDashboard';
import GraphDashboard from '../pages/graphalgorithms/GraphDashboard';

const ContentContainer = (props) => {
    const location = useLocation();

    return (
        <div className='content-container'>
            <Routes location={location} key={location.pathname}>
                <Route path="/path-algorithms" element={<PathDashboard />} />
                <Route path="/graph-algorithms" element={<GraphDashboard />} />
                <Route path="/searching-and-sorting" element={<SortDashboard />}  />
            </Routes>
        </div>
    )
}

export default ContentContainer;