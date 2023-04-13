import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {

}

const styles = {
    marginLeft: '10px'
}

const Navbar = (props: NavbarProps) => {
    return (
        <div>
            <Link style={styles} to="/">Home</Link>
            <Link style={styles} to="/notes">Notes</Link>
            <Link style={styles} to="/login">Login</Link>
            <Link style={styles} to="/register">Register</Link>
            <Link style={styles} to="/profile">Profile</Link>
            <Link style={styles} to="/notes/new">Add Note</Link>
        </div>
    )
}

export default Navbar;