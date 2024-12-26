import React, { useState, createContext, useRef } from 'react';
import '../css/Style.css';
import Footer from '../components/Footer';
import Screen_header from '../components/Screen_header';
import themeColors from '../utils/colors';
import { useNavigate, useLocation } from 'react-router-dom';
import Quiz_Component from '../components/Quiz_Component';
import Trending_Quiz from '../components/Trending_Quiz';
import Top_Quiz from '../components/Top_Quiz';
import topQuizzes, { contests } from '../utils/utils.js';

const Start_screen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [liked, setLiked] = useState([false, false, false]);

    const handleNavigate = () => {
        navigate('/category');
    };

    {/* Quiz Contests */ }
    const handlePlayClick = (contest) => {
        console.log(`Navigating to contest: ${contest.title}`);
        navigate('/join-contest', { state: { contest } });

    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{ backgroundColor: themeColors.backgroundColor, }}>
                <Screen_header />
                <div className="container p-0 text-center text-light " style={{ maxWidth: '492px', border: '4px solid', borderColor: themeColors.borderColor, }}>
                    <div className="mb-4">

                        {/* title */}
                        <div className='d-flex justify-content-between align-items-center p-3'>
                            <div>
                                <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '17px', color: themeColors.headingText }}>Top Quizzes</p>
                            </div>
                            <div>
                                <p
                                    className='p-0 m-0'
                                    style={{ color: themeColors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}
                                    onClick={handleNavigate}
                                >
                                    SEE ALL
                                    <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                </p>
                            </div>
                        </div>

                        <div className='d-flex flex-wrap justify-content-between text-white text-center p-2'>
                            {topQuizzes?.map((quiz, index) => (
                                <Top_Quiz
                                    className='col-4 p-2'
                                    objectData={quiz}
                                    isLiked={liked[index]}
                                    handleLike={() => {
                                        const newLikedState = [...liked];
                                        newLikedState[index] = !newLikedState[index];
                                        setLiked(newLikedState);
                                    }}
                                    onClick={() => {
                                        if (location.pathname.includes('category')) {
                                            navigate(`/view-quiztopic/${quiz.title.toLowerCase().replace(' ', '-')}`);
                                        } else if (location.pathname.includes('start-screen')) {
                                            navigate(`/begin-quiz/${quiz.title.toLowerCase().replace(' ', '-')}`, {
                                                state: { quiz }
                                            });
                                        }
                                    }} />
                            ))}
                        </div>

                        {/* title */}
                        <div className='d-flex justify-content-between align-items-center p-3 pt-0'>
                            <div>
                                <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '17px', color: themeColors.headingText }}>Quiz Contests For You</p>
                            </div>
                            <div>
                                <p
                                    className='p-0 m-0'
                                    style={{ color: themeColors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}
                                    onClick={() => navigate('/contests')}
                                >
                                    SEE ALL
                                    <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                </p>
                            </div>
                        </div>

                        {/* Quiz Contests */}

                        <div className="d-flex flex-wrap p-2">
                            {contests.map((contest, index) => (

                                <div
                                    key={index}
                                    className="card p-3 d-flex flex-row align-items-center text-white w-100 m-2"
                                    style={{ backgroundColor: themeColors.SecondbgColor }}
                                >
                                    <Quiz_Component
                                        contest={contest}
                                        onPlay={() => handlePlayClick(contest)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* title Quiz Bites */}
                        {/* <div className='text-start p-3 pt-0'>
                                <div>
                                    <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '17px' }}>Quiz Bites</p>
                                    <p className='p-0 m-0' style={{ fontSize: '12px', color: '#8783c3' }}>Short, quick quizzes from topics you ❤️ love!</p>
                                </div>

                            </div> */}

                        {/* <div className="p-3">
                                <div className="mini-quiz p-3">
                                    <p className="text-center text-white fw-bold mb-3" style={{ fontSize: '18px' }}>
                                        Pick Upto 3 Categories
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        {categories.map((category, index) => (
                                            <div
                                                key={index}
                                                className="col-4 d-flex justify-content-center"
                                            >
                                                <div
                                                    style={{
                                                        border: '1px dashed #ffcc5b',
                                                        borderRadius: '12px',
                                                        padding: '30px 0',
                                                        background: 'rgba(254,214,52,.12)',
                                                        width: '65%',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            color: '#ffcc5b',
                                                            fontWeight: '900',
                                                            fontSize: '45px',
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center mt-3">
                                        <button
                                            className="btn btn-success w-100 fw-bold"
                                            style={{
                                                backgroundColor: '#0db25b',
                                                borderColor: '#0db25b',
                                                color: '#fff',
                                                borderRadius: '4px',
                                                padding: '5px 30px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            CREATE QUIZ
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                        {/* title */}
                        <div div className='d-flex justify-content-between align-items-center p-3 pt-0' >
                            <div>
                                <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '17px', color: themeColors.headingText }}>Trending Quiz Topics</p>
                            </div>
                            <div>
                                <p className='p-0 m-0' style={{ color: themeColors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }} onClick={() => navigate('/category')}>
                                    SEE ALL
                                    <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                </p>
                            </div>
                        </div>

                        {/* trending quiz */}
                        <Trending_Quiz />
                    </div>

                    <Footer />

                </div>
            </div>
        </div>
    );
}

export default Start_screen;