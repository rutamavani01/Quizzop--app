import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';

const Quiz_Component = ({ contest, onPlay }) => {
    
    const { themeColors } = useAuth();

    const [time, setTime] = useState(0);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="col-3">
                <div
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        position: 'relative',
                        cursor: 'pointer', width: '100%', height: '130px'
                    }}
                >
                    <img className='p-2'
                        src={contest.image}
                        alt={contest.title}
                        width={90}
                        height={90}
                    />
                    <h5
                        className="text-dark m-auto mt-2"
                        style={{ fontSize: '12px', width: '100%' }}
                    >
                        {contest.title}
                    </h5>
                </div>
            </div>
            {/* Text Section */}
            <div className="col-9 ms-3 text-start">
                <div className="w-100">
                    <p className="m-0 p-0" style={{ fontSize: '16px', color: themeColors.colors.headingText }}>
                        Win up to <strong><img src='/images/coin.png' width={17} />{contest.wincoin}</strong>
                    </p>
                    <p
                        className="m-0 p-0 pb-1"
                        style={{ fontSize: '12px', color: themeColors.colors.text }}
                    >
                        <i className="fa-solid fa-stopwatch me-1"></i>Ends in: <strong>{formatTime(time)}</strong>
                    </p>
                    <p
                        className="m-0 p-0 pb-2"
                        style={{ fontSize: '12px', color: themeColors.colors.text }}
                    >
                        <i className="fa-solid fa-play me-1"></i>
                        {contest.players} players playing
                    </p>
                    <button
                        className="fw-medium py-1"
                        style={{
                            borderColor: themeColors.colors.text,
                            border: '2px solid',
                            borderRadius: '5px',
                            backgroundColor: 'transparent',
                            color: themeColors.colors.text,
                            width: '94%',
                        }}
                        onClick={onPlay}
                    >
                        PLAY FOR
                        <img
                            src="/images/coin.png"
                            width={17}
                            style={{ marginLeft: '5px' }}
                            alt="coin"
                        />
                        {contest.playcoin}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Quiz_Component;