import './css/ContentContainer.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import PathDashboard from '../pages/pathalgorithms/PathDashboard';

const ContentContainer = (props) => {
    const location = useLocation();

    return (
        <div className='content-container'>
            <Routes location={location} key={location.pathname}>
                <Route path="/path-algorithms" element={<PathDashboard />} />1
                <Route path="/graph-algorithms" element={<div>Graph</div>} />1
            </Routes>
        </div>
    )
}

export default ContentContainer;