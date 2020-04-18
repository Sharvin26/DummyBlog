import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const activeStyle = {
        color: "Red",
    };
    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink exact activeStyle={activeStyle} to="/">
                Home
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/posts">
                Posts
            </NavLink>
        </nav>
    );
}

export default NavBar;
