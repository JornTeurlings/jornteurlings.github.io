import ContentContainer from "./components/layout/ContentContainer";
import NavBar from "./components/layout/Navbar";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <div className="main-class">
            <BrowserRouter>
                <NavBar />
                <ContentContainer />   
            </BrowserRouter>
        </div>
    )
}

export default App;