import React, { useState, createContext } from 'react';
import '../css/Style.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';
import themeColors, { loginButton, roundedButtons } from '../utils/colors';

const Button = ({ label, image, onClick, isSelected }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: themeColors.SecondbgColor,
                color: themeColors.buttonTextColor,
                border: isSelected ? '1px solid yellow' : '1px solid #3336708a',
                padding: roundedButtons.padding,
                fontSize: roundedButtons.fontSize,
                fontFamily: roundedButtons.fontFamily,
                fontWeight: roundedButtons.fontWeight,
                borderRadius: roundedButtons.borderRadius,
                cursor: roundedButtons.cursor,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {image && <img src={image} alt={label} style={{ width: '26px', height: '26px', marginRight: '10px' }} />}
            {label}
        </button>
    );
};

const Get_started = () => {

    const navigate = useNavigate();

    const [selectedButtons, setSelectedButtons] = useState([]);

    const buttons = [
        { image: '/images/india-new.webp', label: 'India' },
        { image: '/images/Bollywood.png', label: 'Bollywood' },
        { image: '/images/ipl.png', label: 'IPL' },
        { image: '/images/hindi_english.png', label: 'Hindi English' },
        { image: '/images/ssc.png', label: 'SSC' },
        { image: '/images/brain_teasers.png', label: 'Brain Teasers' },
        { image: '/images/quick_maths.png', label: 'Quick Maths' },
        { image: '/images/general_knowledge.png', label: 'General Knowledge' },
        { image: '/images/geography.png', label: 'Geography' },
        { image: '/images/logo_quiz.png', label: 'Logo Quiz' },
    ];

    const handleButtonClick = (label) => {
        setSelectedButtons((prevSelected) => {
            if (prevSelected.includes(label)) {
                return prevSelected.filter((item) => item !== label);
            } else {
                return [...prevSelected, label];
            }
        });
    };

    return (
        <div className=" d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
                height: '100vh',
            }} >
                <div className="container p-2 p-0 text-center text-light " style={{ maxWidth: '492px', border: '4px solid', borderColor: themeColors.borderColor, height: '100vh', }}>
                    <div className="d-flex justify-content-between">
                        <div>
                            {/* <Header /> */}
                            <h5 className="m-4" style={{ fontSize: '16px' }}>Choose some topics you might like</h5>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gridGap: '10px',
                                    padding: '20px',
                                }}
                            >
                                {buttons.map((button, index) => (
                                    <Button
                                        key={index}
                                        label={button.label}
                                        image={button.image}
                                        theme={themeColors}
                                        isSelected={selectedButtons.includes(button.label)}
                                        onClick={() => handleButtonClick(button.label)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="topic-selection-footer pt-3"></div>
                        <button
                            className=" topic-btn mb-4"
                            style={{
                                background: selectedButtons.length > 0 ? themeColors.loginbutton : '#333',
                                color: selectedButtons.length > 0 ? 'white' : 'gray',
                                borderColor: themeColors.loginbtnBorderColor,
                                fontWeight: loginButton.fontWeight,
                                fontSize: loginButton.fontSize,
                                width: loginButton.width
                            }}
                            disabled={selectedButtons.length === 0}
                            onClick={() => {
                                if (selectedButtons.length > 0) {
                                    navigate('/start-quiz');
                                }
                            }}
                        >
                            {selectedButtons.length > 0 ? 'Proceed' : 'Select At least 1 Topic'}
                        </button>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get_started;
