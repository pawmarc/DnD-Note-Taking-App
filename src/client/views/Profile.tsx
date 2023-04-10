import React from "react";
import { useAuth } from "../utilities/use-auth";

interface ProfileProps {

}

const Profile = (props: ProfileProps) => {

    const { authenticated, logout } = useAuth();

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <button onClick={() => logout()}>Log Out!</button>
            </div>
        </div>
    )
}

export default Profile;