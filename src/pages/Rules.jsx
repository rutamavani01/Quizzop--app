import React, { useEffect, useState } from 'react';
import axios from 'axios';
import See_all_header from '../components/See_all_header';
import { useNavigate } from 'react-router';
import { useAuth } from '../auth/AuthContext';
import { dotText, footer_btn, loginButton } from '../utils/colors';

export const Rules = () => {
    const { themeColors } = useAuth();
    const navigate = useNavigate();
    const [rules, setRules] = useState([]);
    const [error, setError] = useState(null);

    const handleBackHome = () => {
        navigate('/start-screen');
    };

    useEffect(() => {
        const fetchRules = async () => {
            try {
                const response = await axios.get('http://192.168.1.8:8000/api/rules');
                setRules(response.data.Data || []); // Assuming 'Data' contains the array of rules.
            } catch (error) {
                console.error('Error fetching rules:', error);
                setError('Failed to fetch rules. Please try again later.');
            }
        };

        fetchRules();
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div
                style={{
                    backgroundColor: themeColors.colors.backgroundColor,
                }}
            >
                <See_all_header />
                <div
                    className="container p-2 p-0 text-center text-light"
                    style={{
                        maxWidth: '492px',
                        width: '492px',
                        borderColor: themeColors.colors.borderColor,
                        border: '4px solid',
                    }}
                >
                    <div className="p-3 text-start">
                        <h3 style={{ color: themeColors.colors.headingText }}>Rules</h3>
                        {error ? (
                            <p style={{ color: 'red' }}>{error}</p>
                        ) : (
                            <ul style={{ padding: '15px' }}>
                                {rules.map((rule, index) => (
                                    <li
                                        key={rule.id || index}
                                        style={{
                                            color: themeColors.colors.text,
                                            fontSize: dotText.fontSize,
                                            fontWeight: dotText.fontWeight,
                                            marginBottom: dotText.marginBottom,
                                        }}
                                    >
                                        {rule.rules}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <button
                            className="m-auto d-flex justify-content-center topic-btn"
                            onClick={handleBackHome}
                            style={{
                                width: loginButton.width,
                                fontWeight: loginButton.fontWeight,
                                fontSize: loginButton.fontSize,
                                background: themeColors.colors.loginbutton    ,
                                color: themeColors.colors.headingText,
                            }}
                        >
                            BACK TO HOME
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
