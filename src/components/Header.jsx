import React from 'react'
import { useAuth } from '../auth/AuthContext';

const Header = () => {
    const { themeColors } = useAuth();
    console.log(themeColors.logo);

    return (
        <div>
            <header className='py-3   d-flex justify-content-center align-items-center ' style={{ backgroundColor: themeColors.colors.SecondbgColor }}>

                <div>{themeColors.logo && <img src={themeColors.logo} alt="Logo" />}</div>


                <div> {themeColors.title && <p className='p-0 m-0 ms-1' style={{ color: themeColors.colors.headingText }}>{themeColors.title.title}</p>}</div>
            </header>
        </div>
    )
}

export default Header