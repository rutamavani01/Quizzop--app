import React from 'react'
import themeColors, { footer_btn, loginButton } from '../utils/colors'
import { useNavigate } from 'react-router'


const FooterBtn = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/quiz')
    }
    return (
        <button
            className=" topic-btn mb-4"
            style={{
                background: footer_btn.background,
                color: footer_btn.color,
                fontWeight: loginButton.fontWeight,
                fontSize: loginButton.fontSize,
                width: loginButton.width,
                borderColor: themeColors.loginbtnBorderColor,
            }}
            onClick={handleClick}
        >
            BEGIN QUIZ
        </button>
    )
}

export default FooterBtn