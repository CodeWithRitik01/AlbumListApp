import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css"

function Navbar(){
    return(
        <>
          <div className="NavContainer">
            <NavLink to="/">
                <div>
                <h1>Album List</h1>
                </div>
            </NavLink>
            <NavLink to="/addAlbum">
                <div className="navButton">
                <button>Add Album</button>
                </div>
            </NavLink>

          </div>
          <Outlet />
        </>
        
    )
}

export default Navbar;