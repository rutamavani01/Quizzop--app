import React from 'react';
import themeColors from '../utils/colors';

const Quiz_Component = ({ contest, onPlay }) => {
    // console.log(contest);

    return (
        <>
            <div className="col-3">
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                        backgroundColor: contest.bgColor,
                        borderRadius: '10px',
                        padding: '10px 10px',
                    }}
                >
                    <img
                        src={contest.imgSrc}
                        alt={contest.title}
                        width={70}
                        height={70}
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
                    <p className="m-0 p-0" style={{ fontSize: '16px',color:themeColors.headingText }}>
                        Win up to <strong><img src='/images/coin.png'  width={17}/>{contest.prize}</strong>
                    </p>
                    <p
                        className="m-0 p-0 pb-1"
                        style={{ fontSize: '12px', color: themeColors.text}}
                    >
                        <i className="fa-solid fa-stopwatch me-1"></i>Ends in:{' '}
                        <strong>{contest.timeLeft}</strong>
                    </p>
                    <p
                        className="m-0 p-0 pb-2"
                        style={{ fontSize: '12px',  color: themeColors.text }}
                    >
                        <i className="fa-solid fa-play me-1"></i>
                        {contest.players} players playing
                    </p>
                    <button
                        className="  fw-medium py-1" style={{borderColor:themeColors.text, border:'2px solid',borderRadius:'5px',backgroundColor:'transparent',color:themeColors.text,width:'94%'}}
                        onClick={onPlay}
                    >
                        PLAY FOR
                        <img
                            src="/images/coin.png"
                            width={17}
                            style={{ marginLeft: '5px' }}
                            alt="coin"
                        />
                        {contest.entryFee}
                    </button>
                </div>

            </div>
        </>
    );
};

export default Quiz_Component;
