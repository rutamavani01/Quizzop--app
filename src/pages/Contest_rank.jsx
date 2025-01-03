import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import themeColors, { dotText } from '../utils/colors';
import See_all_header from '../components/See_all_header';
import Quiz_Component from '../components/Quiz_Component';
import { contests } from '../utils/utils';
import { getCategory } from '../api/Api';
import { useAuth } from '../auth/AuthContext';

const Contest_rank = () => {
    const { themeColors } = useAuth();
    const location = useLocation();
    const score = location.state?.score || 0; // Retrieve score passed from the Quiz page, default to 0 if not found
    const [rank, setRank] = useState(3); // Set initial rank state

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategory();
                // console.log('API Response:', response);
                setCategories(response.data || []);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                setCategories([]);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        // Set rank based on score 
        if (score >= 3) {
            setRank(1);
        } else if (score >= 2) {
            setRank(2);
        } else {
            setRank(3);
        }
    }, [score]);

    // const handlePlayClick = (contest) => {
    //     console.log(`Navigating to contest: ${contest.title}`);
    //     navigate('/quiz');
    // };

    const handlePlayClick = (contest) => {
        navigate('/join-contest', { state: { contest } });

    };


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{ height: '100vh', width: '100%' }}>
                <div className="container p-0 text-center text-light rounded" style={{
                    backgroundColor: themeColors.colors.backgroundColor,
                    maxWidth: '492px',
                    border: '4px solid #3336708a',
                }}>
                    <See_all_header />

                    <div className='p-3'>
                        <p className='p-0 m-0' style={{ color: themeColors.colors.text_color, fontWeight: '700', fontSize: '12px' }}>Brain Teasers</p>
                        <p className='fw-bold' style={{ fontSize: '18px' }}> Play & Win <img width="4%" src='./images/coin.png' /> 10,000</p>
                        <hr className='m-auto' style={{ width: '50%' }}></hr>
                        <p className='mt-2 fw-bold p-0 m-0' style={{ fontSize: '18px' }}>Well Played! 👍</p>
                        <span style={{ color: dotText.color, fontSize: '13px' }}>Winners will be announced @ 05:30 PM</span>
                    </div>

                    <div className='d-flex justify-content-center m-3'>
                        <div className='col-6'>
                            <div className='p-3' style={{
                                backgroundColor: themeColors.colors.buttonColor,
                                border: '1px solid',
                                borderColor: themeColors.colors.borderColor,
                                borderRadius: '8px',
                                width: '95%',
                            }}>
                                <h5 style={{ color: '#ffcc5b', fontWeight: '700' }}>{score}</h5>
                                <h6>Your Scores</h6>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='p-3' style={{
                                backgroundColor: themeColors.colors.buttonColor,
                                border: '1px solid',
                                borderColor: themeColors.colors.borderColor,
                                borderRadius: '8px',
                                width: '95%',
                            }}>
                                <h5 style={{ color: '#ffcc5b', fontWeight: '700' }}>{rank}</h5>
                                <h6>Current Rank</h6>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center p-3'>
                        <div>
                            <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '17px' }}>Play More Quizzes</p>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap p-3 pt-0">
                        {categories.map((contest, index,) => (
                            <div
                                key={index}
                                className="card p-3 d-flex flex-row align-items-center text-white w-100 m-2"
                                style={{ backgroundColor: themeColors.colors.SecondbgColor }}
                            >
                                <Quiz_Component

                                    contest={contest}
                                    onPlay={() => handlePlayClick(contest)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contest_rank;