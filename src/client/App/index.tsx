import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./AppRoutes";
import { AuthProvider, Navbar, Drawer, SideDrawer } from "../components";

interface AppProps {
}

const App = (props: AppProps) => {

    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => setVisible(p => !p);

    return (
        <BrowserRouter>
            <AuthProvider>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                />
                <Drawer open={visible} onClickOverlay={toggleVisible} side={<SideDrawer toggleVisible={toggleVisible} />}>
                    <Navbar toggleVisible={toggleVisible} />
                    <AppRoutes />
                </Drawer>

            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;