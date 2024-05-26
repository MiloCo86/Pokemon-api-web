import "./MainNavBar.css"
import logo from './logo.png'

import { Link } from "react-router-dom";

function MainNavBar(){

    return(
        <div className="main_navbar">
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="links">
                <Link to={'/'}>Home</Link>
            </div>

        </div>
    )
}

export default MainNavBar;

