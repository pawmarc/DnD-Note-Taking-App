import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Private } from '../components';
import { Home, Profile, Login, Register, Notes, NoteDetails, AddNote, UpdateNote } from '../views';

interface AppRoutes {

}

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={
                <Private>
                    <Profile />
                </Private>
            } />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/:id' element={<NoteDetails />} />
            <Route path='/notes/new' element={
                <Private>
                    <AddNote />
                </Private>}
            />
            <Route path='/notes/:id/update' element={
                <Private>
                    <UpdateNote />
                </Private>}
            />
        </Routes>
    )

}

export default AppRoutes;