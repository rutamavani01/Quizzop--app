import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { useAuth } from '../auth/AuthContext';

const Main = () => {
    const { themeColors } = useAuth();
    return (
        <div
            className=" d-flex justify-content-center align-items-center" 
        >
            <div>
                <div className="container p-0 text-center text-light rounded" style={{ maxWidth: '492px',
                     border: themeColors.colors.borderColor,
                      height: '100vh' }}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Header />
                            <Outlet />
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Main
