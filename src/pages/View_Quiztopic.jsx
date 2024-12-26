import React, { useState } from 'react';
import See_all_header from '../components/See_all_header';
import Footer from '../components/Footer';
import Quiz_Component from '../components/Quiz_Component';
import themeColors from '../utils/colors';
import { contests } from '../utils/utils';
import { useNavigate } from 'react-router';

const View_Quiztopic = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    const navigate = useNavigate();

    {/* Quiz Contests */ }
    const handlePlayClick = (contest) => {
        console.log(`Navigating to contest: ${contest.title}`);
        navigate('/join-contest', { state: { contest } });

    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
                // height: '100vh',
            }} >
                <See_all_header />
                <div className="container p-2 p-0 text-center text-light rounded" style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.borderColor, }}>
                    <div className="d-flex justify-content-between">
                        <div>

                            <div className="p-3 text-start">
                                <p className='' style={{ fontWeight: '700', fontSize: '18px',color:themeColors.headingText }}>About India</p>

                                <div className='p-3' style={{ backgroundColor: themeColors.SecondbgColor,borderRadius:'10px' }}>
                                    <img className='me-3'
                                        src='/images/india-new.png'
                                        alt="India"
                                        style={{
                                            float: 'left',
                                            margin: 'auto',
                                            backgroundColor: 'white',
                                            borderRadius: '10px',
                                            padding: '15px 10px',
                                            transition: 'height 0.6 ease'
                                        }}
                                        width={90}
                                        height={90}
                                    />

                                    <p className='text-start ms-2 ' style={{ fontSize: '12px', color: themeColors.backgroundColor }}>
                                        Welcome to the India Quiz category on Quizzop, where you can test your knowledge of one of the world's most diverse and culturally rich countries. Our quiz covers a wide range of topics, including Indian history, geography, culture, festivals, literature, art and architecture,national symbols, food, language, and more..
                                        {/* Toggle for expanded content */}
                                        <div style={{
                                            maxHeight: isExpanded ? '1px' : '500px',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.6s ease',
                                        }}>
                                            Learn about the country's fascinating past, including the Indus Valley civilization, the Mughal Empire, the Mauryan Empire, and India's struggle for independence from the Britishers. Test your knowledge of India's diverse geography with our quiz which covers everything from the Himalayas to the Indian Ocean, the picturesque north-east to the bustling beaches of Goa. Explore India's vibrant culture by answering questions on dance, music, food, and customs.<br></br>
                                            Test your knowledge of India's states and capitals and see if you can identify the famous landmarks that these places have to offer. Learn more about the variety of flavors that the states of this country have to offer not just in the form of food, but also in the form of culture, clothing, heritage, festivals, language, and its own unique quirks. Celebrate India's independence with questions that cover key events and figures in India's fight for freedom. Learn about India's diverse festivals, or test your knowledge of India’s leading literary figures. Discover the beauty of Indian art and architecture that our beautiful country has to offer, which covers everything from ancient temples to modern art. Learn about India's historical figures who helped shape our country and drive its prosperity. So what are you waiting for? Take a quiz on India and see how much you really know about this incredible country!
                                        </div>
                                        <span className='fw-bold'
                                            onClick={toggleContent}
                                            style={{ color: themeColors.backgroundColor, cursor: 'pointer',  }}
                                        >
                                            {isExpanded ? 'View Less' : 'See More'}
                                        </span>
                                    </p>

                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center p-3 pt-0'>
                                <div>
                                    <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '17px',color:themeColors.headingText }}>Trending Quiz Topics</p>
                                </div>
                            </div>

                            <div className="d-flex flex-wrap p-2">
                                {contests.map((contest, index) => (

                                    <div
                                        key={index}
                                        className="card p-3 d-flex flex-row align-items-center text-white w-100 m-2"
                                        style={{ backgroundColor: themeColors.SecondbgColor}}
                                    >
                                        <Quiz_Component
                                            contest={contest}
                                            onPlay={() => handlePlayClick(contest)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <Footer />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View_Quiztopic;