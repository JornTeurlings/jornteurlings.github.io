import './css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container custom-nav-container">
                <div className="nav-logo">
                    A*GRTHMS
                </div>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <NavLink 
                        to="/path-algorithms"
                        className="nav-item-custom"
                        >Shortest Path on Grid
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                        to="/searching-and-sorting"
                        className="nav-item-custom"
                        >Searching and Sorting
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                        to="/graph-algorithms"
                        className="nav-item-custom"
                        >Network/Graph Algorithms
                        </NavLink>
                    </li>
                    {/* <li className='nav-item'>
                        <NavLink 
                        to="/dynamic-programming"
                        className="nav-item-custom"
                        >Dynamic Programming
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                        to="/data-algorithms"
                        className="nav-item-custom"
                        >Data Algorithms
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
