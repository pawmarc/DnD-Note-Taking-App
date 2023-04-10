import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Profile, Login, Register, Notes, NoteDetails } from './views';
import { Navbar, AuthProvider, Private } from './components';

interface AppProps { }

const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar></Navbar>
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
                </Routes>
            </AuthProvider>

        </BrowserRouter>
    )
}
export default App;