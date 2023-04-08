import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface PrivateProps {

}

const Private = (props: PrivateProps) => {
    const location = useLocation();
    const navigate = useNavigate();


    console.log(location);
    const TOKEN = localStorage.getItem('token');
    if (!TOKEN) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace={true}></Navigate>
    }
    useEffect(() => {
        fetch('/auth/validate/me', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`,
            },
        })
            .then(res => {
                if (res.status !== 200) {
                    navigate('/login')
                }
            })
            .then(result => console.log(result))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <h1>Private</h1>
        </div>
    )
}

export default Private;