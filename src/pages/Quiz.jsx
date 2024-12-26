import React, { useState, useEffect } from 'react';
import themeColors from '../utils/colors';
import Life_line_btn from '../components/Life_line_btn';
import { questions } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(1000);
    const [showLifelines, setShowLifelines] = useState(false);
    const [isTimerFrozen, setIsTimerFrozen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0] || {});
    const [currentOptions, setCurrentOptions] = useState(questions[0].options);
    const [pollResults, setPollResults] = useState({
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
    });

    // Add these states
    const [highlightedOptions, setHighlightedOptions] = useState([]); // Tracks highlighted options
    const [disabledOptions, setDisabledOptions] = useState([]); // Tracks disabled options

    const navigate = useNavigate();

    useEffect(() => {
        if (currentQuestionIndex < 20) {
            setCurrentOptions(questions[currentQuestionIndex].options);
            setPollResults({
                option1: 0,
                option2: 0,
                option3: 0,
                option4: 0,
            });
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (!isTimerFrozen) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        navigate('/contest-rank', { state: { score: score } });
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [score, navigate, isTimerFrozen]);

    useEffect(() => {
        // Reset highlighted options when the question changes
        setHighlightedOptions([]);
    }, [currentQuestionIndex]);

    useEffect(() => {
        // Reset disabled options when the question changes
        setDisabledOptions([]);
        setSelectedAnswer(null); // Reset selected answer for the new question
    }, [currentQuestionIndex]);

    useEffect(() => {
        const handleFiftyFiftyEvent = (event) => {
            const { disabledOptions: newDisabledOptions, highlightedOptions: newHighlightedOptions } = event.detail;

            setDisabledOptions(newDisabledOptions);
            setHighlightedOptions(newHighlightedOptions);
        };

        window.addEventListener('fiftyFifty', handleFiftyFiftyEvent);

        return () => {
            window.removeEventListener('fiftyFifty', handleFiftyFiftyEvent);
        };
    }, []);

    const handleAnswerSelect = (selectedOptionIndex) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(selectedOptionIndex);

        if (currentOptions[selectedOptionIndex] ===
            questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer]) {
            setScore(prevScore => prevScore + 1);
        }

        if (isTimerFrozen) {
            setIsTimerFrozen(false);
        }

        setTimeout(() => {
            if (currentQuestionIndex < 19) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                setSelectedAnswer(null); // Reset selected answer for next question
            } else {
                navigate('/contest-rank', {
                    state: {
                        score: score + (
                            currentOptions[selectedOptionIndex] ===
                                questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer] ? 1 : 0
                        )
                    }
                });
            }
        }, 1000);
    };

    const getButtonColor = (optionIndex) => {


        // Check if the option is highlighted
        if (highlightedOptions.includes(optionIndex)) {
            return themeColors.headingText; // Gold color for highlighted options
        }

        if (selectedAnswer === null) {
            return themeColors.backgroundColor; // Use theme color when no answer is selected
        }

        const currentQuestionCorrectAnswer = questions[currentQuestionIndex].answer;
        const currentQuestionCorrectOption = questions[currentQuestionIndex].options[currentQuestionCorrectAnswer];

        if (currentOptions[optionIndex] === currentQuestionCorrectOption) {
            return themeColors.currectBtn // Green for correct answer
        }

        if (currentOptions[optionIndex] === currentOptions[selectedAnswer] &&
            currentOptions[optionIndex] !== currentQuestionCorrectOption) {
            return themeColors.wrongBtn // Red for wrong answer
        }

        return themeColors.backgroundColor; // Use theme color for other cases
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{ height: '100vh', width: '100%' }}>
                <div
                    className="container p-0 text-center text-light "
                    style={{
                        backgroundColor: themeColors.backgroundColor,
                        maxWidth: '492px',
                        border: '4px solid', borderColor: themeColors.borderColor,
                        height: '100vh'
                    }}
                >
                    <div className='d-flex justify-content-between align-items-center p-3'>
                        <div>
                            <span className='fw-bold' style={{ color: themeColors.SecondbgColor }}>Your Score: {score}</span>
                        </div>
                        <div>
                            <span className='me-3' style={{
                                backgroundColor: themeColors.SecondbgColor,
                                borderColor: themeColors.borderColor,
                                border: '1px solid',
                                padding: '6px',
                                borderRadius: '50%',
                                fontSize: '11px',
                                opacity: isTimerFrozen ? 0.5 : 1 }}>
                                {timeLeft}
                            </span>
                        </div>
                    </div>

                    <div className='card p-3 m-3' style={{ backgroundColor: themeColors.SecondbgColor }}>
                        <div className='d-flex justify-content-between' style={{ color: themeColors.headingText }}>
                            <div className='fw-bold'>{currentQuestionIndex + 1} / 20</div>
                        </div>

                        <div>
                            <h5 className=' mb-4' style={{color:themeColors.backgroundColor}}>{questions[currentQuestionIndex].question}</h5>
                            <div className='d-flex justify-content-center flex-wrap'>
                                {currentOptions.map((option, index) => (
                                    option !== null && (
                                        <div key={index} className='col-6 mb-3 position-relative'>
                                            <button
                                                className=' border-0 fw-bold'
                                                onClick={() => handleAnswerSelect(index)}
                                                style={{
                                                    backgroundColor: getButtonColor(index),
                                                    padding: '5px 20px',
                                                    borderRadius: '9px',
                                                    width: '95%', color:themeColors.SecondbgColor,
                                                    border: highlightedOptions.includes(index) ? '3px solid #FFA500' : 'none'
                                                }}
                                            >
                                                {option}
                                            </button>
                                            {pollResults.option1 > 0 && (
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        width: '92%',
                                                        height: '17px',
                                                        borderRadius: '8px',
                                                        backgroundColor: themeColors.borderColor,
                                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                                                        margin: '0 auto'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: `${pollResults[`option${index + 1}`]}%`,
                                                            height: '100%',
                                                            borderRadius: '8px',
                                                            backgroundColor: themeColors.headingText,
                                                            transition: 'width 0.3s ease',
                                                            marginTop: '10px',
                                                        }}
                                                    />
                                                    <span
                                                        className="position-absolute "
                                                        style={{
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            fontSize: '14px',
                                                            fontWeight: 'bold', color:themeColors.SecondbgColor
                                                        }}
                                                    >
                                                        {pollResults[`option${index + 1}`]}%
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="custom-button"
                        style={{
                            border: '1px solid',
                            borderColor: themeColors.borderColor,
                        }}
                        onClick={() => setShowLifelines(true)}
                    >
                        <img src="./images/ecg-lines.png" alt="lifeline-icon" /> USE A LIFELINE
                    </button>

                    {showLifelines && (
                        <Life_line_btn
                            onClose={() => setShowLifelines(false)}
                            currentQuestionIndex={currentQuestionIndex}
                            setQuestionOptions={setCurrentOptions}
                            setPollResults={setPollResults}
                            setIsTimerFrozen={setIsTimerFrozen}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
