import React, { useContext } from "react";
import { toast } from "react-toastify";
import { twMerge } from 'tailwind-merge';

import { useAuth } from "../utilities/use-auth";
import { Toast } from '../components';
import Container from "../components/Container";


interface HomeProps {

}


const Home = (props: HomeProps) => {
    const { authenticated } = useAuth();

    const testToast = () => {
        Toast.success('Joooo!s')
        Toast.error('NOOOOOOOOOO!s')
    }

    return (
        <>
            <Container className='p-8'>
                <h1 className='text-3xl prose text-teal-100'>Home View</h1>
                <h2>Home | {authenticated ? "Logged in" : "Lot logged"}</h2>
                <button className='mt-6 btn btn-primary' onClick={testToast}>Test button</button>
                <div className='mt-6'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, est, reiciendis dolorem similique aliquam ex accusamus odit provident illum explicabo dolorum omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, doloribus? Corporis voluptate expedita sapiente aliquid assumenda sit at autem ratione, quas labore cum doloribus odit dignissimos similique repellat laborum dolorum?
                    </p>

            </div>
            </Container>
        </>
    )
}

export default Home;