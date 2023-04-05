import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {

}

const Navbar = (props: NavbarProps) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/private">Private</Link>
        </div>
    )
}

export default Navbar;