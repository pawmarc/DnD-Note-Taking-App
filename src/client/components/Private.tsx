import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utilities/use-auth";

interface PrivateProps {
    children: React.ReactNode,
}

const Private = (props: PrivateProps) => {
    const location = useLocation();
    const { authenticated } = useAuth();
    // console.log(location);
    if (!authenticated) {
        return (
            <Navigate
                to="/login"
                state={{
                    message: 'You have to be logged in.',
                    from: location.pathname
                }}
                replace={true}
            />
        )
    }
    return (
        <>{props.children}</>
    )
}

export default Private;