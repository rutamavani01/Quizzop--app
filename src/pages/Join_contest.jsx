import React, { useState } from 'react';
import themeColors from '../utils/colors';
import See_all_header from '../components/See_all_header';
import FooterBtn from '../components/Footer-btn';
import { useNavigate } from 'react-router';

const Join_contest = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const navigate = useNavigate();

    const handleRules = () => {
        navigate('/rules')
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
            }} >
                <See_all_header />
                <div className="container p-2 p-0 text-center text-light " style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.borderColor, height: '100vh' }}>
                    <div className="d-flex justify-content-between">
                        <div style={{ width: '100%' }}>

                            {/* Contest Details */}
                            <div
                                className="p-3 m-4 text-start"
                                style={{
                                    backgroundColor: themeColors.SecondbgColor,
                                    borderColor: themeColors.borderColor,
                                    borderWidth: '2px',
                                    fontWeight: '700',
                                    borderRadius: '10px',
                                }}
                            >
                                <div className="d-flex justify-content-start align-items-center">
                                    <div
                                        style={{
                                            width: '22%',
                                            height: '100%',
                                            backgroundColor: 'white',
                                            borderRadius: '10px',
                                            padding: '10px 10px',
                                        }}
                                    >
                                        <img
                                            src="/images/quick_maths.png"
                                            alt="quick maths"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="text-start p-2">
                                        <p
                                            className="p-0 m-0"
                                            style={{
                                                fontSize: '11px',
                                                color: '#6063af',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            Brain Teasers
                                        </p>
                                        <p>
                                            Play & Win{' '}
                                            <img src="/images/coin.png" width="13%" /> 550
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className="mt-3"
                                    style={{
                                        color: '#8789c3',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                    }}
                                >
                                    <i className="fa-solid fa-circle fs-12 me-2"></i>You've got
                                    90 - 150 seconds to answer all questions.
                                </p>
                                <p
                                    className=""
                                    style={{
                                        color: '#8789c3',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                    }}
                                >
                                    <i className="fa-solid fa-circle fs-12 me-2"></i> Answer as
                                    many questions as you can.
                                </p>
                                <p
                                    className=""
                                    style={{
                                        color: '#8789c3',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                    }}
                                >
                                    <i className="fa-solid fa-circle fs-12 me-2"></i> You can take
                                    help by using the lifelines present in the contest.
                                </p>
                                <p
                                    className=""
                                    style={{
                                        color: '#8789c3',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                    }}
                                >
                                    <i className="fa-solid fa-circle fs-12 me-2"></i> Lifelines can
                                    be used for free or by using a given amount of coins for each
                                    lifeline.
                                </p>
                                <p
                                    className=""
                                    style={{
                                        color: '#8789c3',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                    }}
                                >
                                    <i className="fa-solid fa-circle fs-12 me-2"></i> Entry fee{' '}
                                    <img src="/images/coin.png" width="4%" /> 100.
                                </p>
                            </div>

                            {/* View Prizes Button */}
                            <div className="d-flex flex-column align-items-center mb-4">
                                <div
                                    className="d-flex align-items-center justify-content-center position-relative"
                                    style={{ cursor: 'pointer' }}
                                    onClick={toggleDropdown}
                                >
                                    <p
                                        className="m-0"
                                        style={{
                                            fontWeight: '600',
                                            color: '#ffcc5b',
                                        }}
                                    >
                                        View Prizes
                                    </p>
                                    <i
                                        className="fa-solid fa-circle fs-12 mx-2"
                                        style={{ color: '#ffcc5b' }}
                                    ></i>
                                    <p
                                        className="m-0"
                                        style={{
                                            fontWeight: '600',
                                            color: '#ffcc5b',
                                        }}

                                        onClick={handleRules}
                                    >
                                        Rules
                                    </p>
                                </div>

                                {/* Dropdown Content */}
                                {showDropdown && (
                                    <div
                                        className="mt-2 p-3 "
                                        style={{
                                            backgroundColor: '#191a32',
                                            border: '2px solid #3336708a',
                                            borderRadius: '10px',
                                            zIndex: 10,
                                            textAlign: 'start',
                                            width: '90%'
                                        }}
                                    >
                                        <p className="mb-2" style={{ color: '#ffcc5b' }}>
                                            Rank 1: <img src="/images/coin.png" width="4%" /> 2,000
                                        </p>
                                        <p className="mb-2" style={{ color: '#ffcc5b' }}>
                                            Ranks 2 - 5:{' '}
                                            <img src="/images/coin.png" width="4%" /> 1,000
                                        </p>
                                        <p className="mb-2" style={{ color: '#ffcc5b' }}>
                                            Ranks 6 - 10:{' '}
                                            <img src="/images/coin.png" width="4%" /> 500
                                        </p>
                                        <p className="mb-2" style={{ color: '#ffcc5b' }}>
                                            Ranks 11 - 50:{' '}
                                            <img src="/images/coin.png" width="4%" /> 100
                                        </p>
                                        <p className="mb-2" style={{ color: '#ffcc5b' }}>
                                            Ranks 51 - 100:{' '}
                                            <img src="/images/coin.png" width="4%" /> 50
                                        </p>
                                        <p className="mb-2" style={{ color: '#ffcc5b' }}>
                                            Ranks 101 - 1000:{' '}
                                            <img src="/images/coin.png" width="4%" /> 10
                                        </p>
                                    </div>
                                )}
                            </div>

                            <FooterBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join_contest;
