import './css/ContentContainer.css';
import { Routes, Route, useLocation} from 'react-router-dom';

const ContentContainer = (props) => {
    const location = useLocation();

    return (
        <div className='content-container'>
            <Routes location={location} key={location.pathname}>
                <Route path="/path-algorithms" element={<div>Path</div>} />1
                <Route path="/graph-algorithms" element={<div>Graph</div>} />1
            </Routes>
        </div>
    )
}

export default ContentContainer;