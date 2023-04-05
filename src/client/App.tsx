import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Private, Login } from './views';
import { Navbar } from './components';

interface AppProps { }

const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/private' element={<Private />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;