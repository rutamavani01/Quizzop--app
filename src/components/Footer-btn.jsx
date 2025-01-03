import React from 'react';
import { footer_btn, loginButton } from '../utils/colors';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../auth/AuthContext';
import { roundedButtons } from '../utils/colors';

const FooterBtn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { contest } = location.state || {};
    const { themeColors } = useAuth();

    const handleClick = () => {
        if (contest?.id) {
            navigate('/quiz', {
                state: { contest }
            });
        } else {
            console.error('No contest selected');
        }
    };

    return (
        <button
            className="topic-btn mb-4"
            style={{
                background: themeColors.colors.loginbutton,
                color: themeColors.colors.headingText,
                fontWeight: loginButton.fontWeight,
                fontSize: loginButton.fontSize,
                width: loginButton.width,
                borderColor: themeColors.colors.headingText,
            }}
            onClick={handleClick}
        >
            BEGIN QUIZ
        </button>
    );
};

export default FooterBtn;