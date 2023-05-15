import React from "react";
import { useAuth } from "../utilities/use-auth";
import { Container, PageHeader } from "../components";

interface ProfileProps {

}

const Profile = (props: ProfileProps) => {

    const { authenticated, logout } = useAuth();

    return (
        <Container className='p-8'>
            <PageHeader>Profile View</PageHeader>
            <div className='mt-6'>
                <button className='btn btn-primary btn-wide' onClick={() => logout()}>Log Out!</button>
            </div>
        </Container>
    )
}

export default Profile;