import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../auth/AuthContext';
const See_all_header = () => {
    const { themeColors } = useAuth();

    const [coins, setCoins] = useState(300);
    
    const navigate = useNavigate();

    return (
        <header className='d-flex justify-content-between align-items-center' style={{ padding: '8px 19px',backgroundColor:themeColors.colors.SecondbgColor }} >
            <div style={{color:themeColors.colors.text}}>
                <i class="fa-solid fa-chevron-left me-2 fw-bold" style={{cursor:'pointer'}} onClick={()=>navigate('/start-screen')}></i>
                <span style={{color:themeColors.colors.text}} className='fw-bold'>Quiz Topics</span>

            </div>
            <div className='d-flex align-items-center'>
                <button className='d-flex justify-content-between align-items-center' style={{ padding: '5px 9px 5px 0px', backgroundColor: themeColors.colors.backgroundColor, border: '0', borderRadius: '6px' }}>
                    <div>
                        <img src='/images/coin.png' width={'45%'} alt="Coin" />
                    </div>
                    <div className="text-white fw-bold" style={{ fontSize: '9px' }}>
                        <p className='m-0 p-0' style={{ color:themeColors.colors.text }}>COINS</p>
                        <h6 className="m-0 fw-bold" style={{ fontSize: '11px',color:themeColors.colors.text }}>{coins}</h6>
                    </div>

                </button>
               <span style={{color:themeColors.colors.text}}> <i class="fa-solid fa-bell ms-3"></i></span>

            </div>
        </header>
    )
}

export default See_all_header