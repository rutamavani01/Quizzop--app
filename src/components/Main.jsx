import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import themeColors from '../utils/colors'

const Main = () => {
    return (
        <div
            className=" d-flex justify-content-center align-items-center" 
        >
            <div>
                <div className="container p-0 text-center text-light rounded" style={{ maxWidth: '492px', border: themeColors.borderColor, height: '100vh' }}>
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
