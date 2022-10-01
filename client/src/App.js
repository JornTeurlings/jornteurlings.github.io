import ContentContainer from "./components/layout/ContentContainer";
import { useWindowSize } from "./hooks/useWindowSize";
import NavBar from "./components/layout/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend} from 'react-dnd-html5-backend';
import './App.css';
import { useEffect } from "react";

const App = () => {
    const isSmall = useWindowSize();

    useEffect(() => {
        renderPage();
    }, [isSmall])

    const renderPage = () => {
        if (isSmall) {
            return (
                <div className="d-flex h-100">
                    <div className="m-auto h-50">
                        <div className="m-auto w-75 text-center">
                            <i className="fa-solid fa-exclamation fa-5x" style={{ color: 'grey'}}></i>
                            <p>This website is not intended for small devices. Please view the site from a larger device</p>
                        </div>
                    </div>
                </div>
            )
        } else {
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
    }
    return (
        <>
            {renderPage()}
        </>
    )
}

export default App;