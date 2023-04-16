import React, { useEffect, useMemo, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavbarProps {
    toggleVisible: () => void;
}

const styles = {
    marginLeft: '10px'
}

const Navbar = ({ toggleVisible }: NavbarProps) => {

    return (
        <div>
            <button className='btn btn-square btn-ghost' onClick={toggleVisible}>
                <GiHamburgerMenu className="text-2xl md:text-3xl" /></button>
        </div>
    )
}

export default Navbar;