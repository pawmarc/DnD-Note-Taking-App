import React, { useContext } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../utilities/use-auth";
import { Toast } from '../components';


interface HomeProps {

}


const Home = (props: HomeProps) => {
    const { authenticated } = useAuth();

    const testToast = () => {
        // toast('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        // });
        Toast.success('Joooo!s')
        Toast.error('NOOOOOOOOOO!s')
    }

    return (
        <div>
            <h1>Home {authenticated ? "Logged in" : "Lot logged"}</h1>
            <div>
                <button onClick={testToast} className="btn btn-primary">Test button</button>
            </div>
        </div>
    )
}

export default Home;