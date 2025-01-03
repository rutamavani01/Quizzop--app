import React, { useState } from 'react';
import Menu from '../pages/Menu';
import { useNavigate } from 'react-router';
import { useAuth } from '../auth/AuthContext';

const Screen_header = () => {
    const { themeColors } = useAuth();
    const navigate = useNavigate();

    const [coins, setCoins] = useState(300);

    const handleMenu = () => {
        navigate('/menu')
    }

    return (
        <header className='d-flex justify-content-between align-items-center' style={{ padding: '4px 19px', backgroundColor: themeColors.colors.SecondbgColor }}>
            <div>

                <span
                    className="me-1"
                    type="button"
                    style={{ backgroundColor: 'transparent', color: 'white', padding: '8px 12px', borderRadius: '5px' }}
                    onClick={handleMenu}
                >
                    <i className="fa-solid fa-bars"></i>
                </span>

                {/* <div className='d-flex justify-content-center align-items-center'> */}
                    {themeColors.logo && <img src={themeColors.logo} alt="Logo"  />}
                {themeColors.title && <span className='p-0 m-0 ms-1' style={{ color: themeColors.colors.headingText }}>{themeColors.title.title}</span>}
                {/* </div> */}

            </div>
            <button className='d-flex justify-content-between align-items-center' style={{ padding: '5px 9px 5px 0px', backgroundColor: themeColors.colors.backgroundColor, border: '0', borderRadius: '6px' }}>
                <div>
                    <img src='images/coin.png' width={'45%'} alt="Coin" />
                </div>
                <div className=" fw-bold" style={{ fontSize: '9px', color: themeColors.colors.text }}>
                    <p className='m-0 p-0 fw-bold' style={{ color: themeColors.colors.text }}>COINS</p>
                    <h6 className="m-0 fw-bold" style={{ fontSize: '11px' }}>{coins}</h6>
                </div>


            </button>
        </header>
    );
}

export default Screen_header;
