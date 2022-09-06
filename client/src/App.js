import ContentContainer from "./components/layout/ContentContainer";
import NavBar from "./components/layout/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend} from 'react-dnd-html5-backend';
import './App.css';

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="main-class">
                <BrowserRouter>
                    <NavBar />
                    <ContentContainer />   
                </BrowserRouter>
            </div>
        </DndProvider>
    )
}

export default App;