import React, { useState } from 'react';
import See_all_header from '../components/See_all_header';
import Footer from '../components/Footer';
import themeColors, { roundedButtons } from '../utils/colors';
import Quiz_Component from '../components/Quiz_Component';
import { contests } from '../utils/utils.js';
import { useNavigate } from 'react-router';

const Contests = ({ buttonsData, containerStyle }) => {
    const defaultButtonsData = [
        { label: 'All', backgroundColor: '#20213f', textColor: '#6063af' },
        { label: 'Brain Teasers', backgroundColor: '#20213f', textColor: '#6063af' },
        { label: 'Automobiles', backgroundColor: '#20213f', textColor: '#6063af' },
        { label: 'Ashneer Grover', backgroundColor: '#20213f', textColor: '#6063af' },
    ];

    const buttons = buttonsData || defaultButtonsData;

    const [activeButton, setActiveButton] = useState(buttons[0].label);
    const [filteredContests, setFilteredContests] = useState(contests);

    const handleButtonClick = (label) => {
        setActiveButton(label);
        filterContests(label);
    };

    const filterContests = (label) => {
        if (label === 'All') {
            setFilteredContests(contests);
        } else {
            const filtered = contests.filter((contest) =>
                contest.title.toLowerCase().includes(label.toLowerCase())
            );
            setFilteredContests(filtered);
        }
    };

    const navigate = useNavigate();

    const handlePlay = (contest) => {
        console.log(`Navigating to contest: ${contest.title}`);
        navigate('/join-contest', { state: { contest } });
    };

    const handleMenuBtn = () => {
        navigate('/category');
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
            }} >
                <See_all_header />
                <div
                    className="container p-0 text-center text-light "
                    style={{
                        maxWidth: '492px',
                        border: '4px solid', borderColor: themeColors.borderColor,
                        ...(containerStyle || {}),
                    }}
                >

                    <div className="d-flex justify-content-start align-items-center p-3">
                        <div onClick={handleMenuBtn} style={{ cursor: 'pointer' }}>

                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2837 15.3048C18.9605 15.3048 16.2423 18.023 16.2423 21.3462C16.2423 24.6694 18.9605 27.3875 22.2837 27.3875C25.6069 27.3875 28.325 24.6694 28.325 21.3462C28.325 18.023 25.6069 15.3048 22.2837 15.3048ZM22.2837 17.0678C24.6071 17.0678 26.562 19.0227 26.562 21.3462C26.562 23.6696 24.6071 25.6245 22.2837 25.6245C19.9602 25.6245 18.0053 23.6696 18.0053 21.3462C18.0053 19.0227 19.9602 17.0678 22.2837 17.0678Z" fill="#4782F4" stroke="#4782F4" stroke-width="0.4" />
                                <path d="M24.2307 5.76928L24.2307 12.5842C25.691 12.5842 27.1514 10.1503 27.1514 9.17669C27.1514 8.20314 26.6646 4.30895 26.6646 3.82217C26.6646 3.33539 23.2571 2.36183 20.3365 2.84861C17.9999 3.23803 17.4158 4.95799 17.4158 5.76928L24.2307 5.76928Z" fill="url(#paint0_linear_5947_44230)" />
                                <path d="M16.4423 9.66346L16.4423 5.76923C16.4423 3.6274 18.1947 1.875 20.3365 1.875L24.2308 1.875C26.3726 1.875 28.125 3.6274 28.125 5.76923L28.125 9.66346C28.125 11.8053 26.3726 13.5577 24.2308 13.5577L20.3365 13.5577C18.1947 13.5577 16.4423 11.8053 16.4423 9.66346ZM26.762 5.76923C26.762 4.40625 25.5938 3.23798 24.2308 3.23798L20.3365 3.23798C18.9736 3.23798 17.8053 4.40625 17.8053 5.76923L17.8053 9.66346C17.8053 11.0264 18.9736 12.1947 20.3365 12.1947L24.2308 12.1947C25.5938 12.1947 26.762 11.0264 26.762 9.66346L26.762 5.76923Z" fill="#FAFAFA" />
                                <path d="M10.6008 5.76928L10.6008 12.5842C12.0611 12.5842 13.5215 10.1503 13.5215 9.17669C13.5215 8.20314 13.0347 4.30895 13.0347 3.82217C13.0347 3.33539 9.62725 2.36183 6.70658 2.84861C4.37004 3.23803 3.78591 4.95799 3.78591 5.76928L10.6008 5.76928Z" fill="url(#paint1_linear_5947_44230)" />
                                <path d="M2.81243 9.66346L2.81242 5.76923C2.81242 3.6274 4.56483 1.875 6.70666 1.875L10.6009 1.875C12.7427 1.875 14.4951 3.6274 14.4951 5.76923L14.4951 9.66346C14.4951 11.8053 12.7427 13.5577 10.6009 13.5577L6.70666 13.5577C4.56483 13.5577 2.81243 11.8053 2.81243 9.66346ZM13.1321 5.76923C13.1321 4.40625 11.9639 3.23798 10.6009 3.23798L6.70666 3.23798C5.34367 3.23798 4.17541 4.40625 4.17541 5.76923L4.17541 9.66346C4.17541 11.0264 5.34368 12.1947 6.70666 12.1947L10.6009 12.1947C11.9639 12.1947 13.1321 11.0264 13.1321 9.66346L13.1321 5.76923Z" fill="#FAFAFA" />
                                <path d="M10.6008 19.399L10.6008 26.2139C12.0611 26.2139 13.5215 23.78 13.5215 22.8064C13.5215 21.8328 13.0347 17.9386 13.0347 17.4519C13.0347 16.9651 9.62725 15.9915 6.70658 16.4783C4.37004 16.8677 3.78591 18.5877 3.78591 19.399L10.6008 19.399Z" fill="url(#paint2_linear_5947_44230)" />
                                <path d="M2.81243 23.2933L2.81242 19.3991C2.81242 17.2572 4.56483 15.5048 6.70666 15.5048L10.6009 15.5048C12.7427 15.5048 14.4951 17.2572 14.4951 19.3991L14.4951 23.2933C14.4951 25.4351 12.7427 27.1875 10.6009 27.1875L6.70666 27.1875C4.56483 27.1875 2.81243 25.4351 2.81243 23.2933ZM13.1321 19.3991C13.1321 18.0361 11.9639 16.8678 10.6009 16.8678L6.70666 16.8678C5.34367 16.8678 4.17541 18.0361 4.17541 19.3991L4.17541 23.2933C4.17541 24.6563 5.34368 25.8245 6.70666 25.8245L10.6009 25.8245C11.9639 25.8245 13.1321 24.6563 13.1321 23.2933L13.1321 19.3991Z" fill="#FAFAFA" />
                                <defs>
                                    <linearGradient id="paint0_linear_5947_44230" x1="17.4158" y1="7.65006" x2="27.1514" y2="7.65006" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.001" stop-color="#1E1E33" />
                                        <stop offset="1" stop-color="#373978" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_5947_44230" x1="3.78591" y1="7.65006" x2="13.5215" y2="7.65006" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.001" stop-color="#1E1E33" />
                                        <stop offset="1" stop-color="#373978" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_5947_44230" x1="3.78591" y1="21.2798" x2="13.5215" y2="21.2798" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.001" stop-color="#1E1E33" />
                                        <stop offset="1" stop-color="#373978" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                        <div className="d-flex flex-row overflow-hidden ms-2 quiz-topic-box">
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleButtonClick(button.label)}
                                    style={{
                                        padding: '6px 10px',
                                        fontSize: '12px',
                                        marginLeft: '10px',
                                        fontFamily: roundedButtons.fontFamily,
                                        fontWeight: roundedButtons.fontWeight,
                                        borderRadius: roundedButtons.borderRadius,
                                        cursor: roundedButtons.cursor,
                                        border: '0px',
                                        backgroundColor:
                                            activeButton === button.label
                                                ? themeColors.SecondbgColor
                                                : '#20213f',
                                        color: activeButton === button.label ? 'black' : '#fff',
                                    }}
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quiz Component for each contest */}
                    <div className="d-flex flex-wrap p-3 pt-0">
                        {filteredContests.map((contest, index) => (
                            <div
                                key={index}
                                className="card p-3 d-flex flex-row align-items-center text-white w-100 m-2"
                                style={{ backgroundColor: themeColors.SecondbgColor }}
                            >
                                <Quiz_Component contest={contest} onPlay={() => handlePlay(contest)} />
                            </div>
                        ))}
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Contests;
