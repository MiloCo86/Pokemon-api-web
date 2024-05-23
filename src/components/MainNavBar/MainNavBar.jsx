import "./MainNavBar.css"

import { Link } from "react-router-dom";

function MainNavBar(){

    return(
        <div className="main_navbar">
            <div className="logo">
                <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="" />
            </div>

            <div className="links">
                <Link to={'/'}>Home</Link>
            </div>

        </div>
    )
}

export default MainNavBar;

