import React, { useState, useRef } from 'react';
import '../css/Style.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import themeColors, { loginButton } from '../utils/colors';


const Start_quiz = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [isVideoHalfway, setIsVideoHalfway] = useState(false);
    const [message, setMessage] = useState('Quizzop is getting ready!');
    const [buttonLabel, setButtonLabel] = useState('Start Now');
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            const halfwayPoint = video.duration / 2;

            if (video.currentTime >= halfwayPoint && !isVideoHalfway) {
                setIsVideoHalfway(true);
                setMessage('Quizzop is ready for you!');
                setButtonLabel('Ready to Start');
            }
        }
    };

    const handleProceedClick = () => {
        if (isVideoHalfway) {
            navigate('/start-screen');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
            }} >
                <div className="container p-2 p-0 text-center text-light " style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.borderColor, height: '100vh' }}>

                    <div className="mb-4 ">

                        <div className="mt-3">
                            <video
                                ref={videoRef}
                                width="80"
                                muted
                                autoPlay
                                onTimeUpdate={handleTimeUpdate}
                            >
                                <source src="/images/start-quiz-dark.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h5 className="m-4" style={{ fontSize: '16px' }}>{message}</h5>

                        <button
                            className="topic-btn text-center"
                            onClick={handleProceedClick}
                            disabled={!isVideoHalfway}
                            style={{
                                backgroundColor: isVideoHalfway ? themeColors.loginbutton : themeColors.buttonColor, // Blue color when ready
                                color: themeColors.buttonTextColor,
                                borderColor: themeColors.loginbtnBorderColor,
                                fontWeight: loginButton.fontWeight,
                                fontSize: loginButton.fontSize,
                                width: loginButton.width,
                                fontFamily: loginButton.fontFamily,
                                cursor: !isVideoHalfway ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.3s ease',
                                margin: 'auto',


                            }}
                        >
                            {buttonLabel}
                        </button>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Start_quiz;


{/* <div
className="container p-0 text-center text-light rounded"
style={{
    backgroundColor: themeColors.backgroundColor,
    maxWidth: '492px',
    border: '4px solid #3336708a',
}}
>
<div className="mb-4">

    <div className="mt-3">
        <video
            ref={videoRef}
            width="80"
            muted
            autoPlay
            onTimeUpdate={handleTimeUpdate}
        >
            <source src="/images/start-quiz-dark.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    <h5 className="m-4" style={{ fontSize: '16px' }}>{message}</h5>

    <button
        className="topic-btn text-center"
        onClick={handleProceedClick}
        disabled={!isVideoHalfway}
        style={{
            backgroundColor: isVideoHalfway ? '#3e51b5' : themeColors.buttonColor, // Blue color when ready
            color: themeColors.buttonTextColor,

            fontWeight: loginButton.fontWeight,
            fontSize: loginButton.fontSize,
            width: loginButton.width,
            fontFamily: loginButton.fontFamily,
            cursor: !isVideoHalfway ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease',
            margin: 'auto',


        }}
    >
        {buttonLabel}
    </button>
</div>
<Footer />
</div> */}