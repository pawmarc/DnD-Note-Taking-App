import React, { useContext } from "react";
import { useAuth } from "../utilities/use-auth";

interface HomeProps {

}


const Home = (props: HomeProps) => {
    const { authenticated } = useAuth();

    return (
        <div>
            <h1>Home {authenticated ? "Logged in" : "Lot logged"}</h1>
            <div>
                <button className="btn btn-primary">Test button</button>
            </div>
        </div>
    )
}

export default Home;