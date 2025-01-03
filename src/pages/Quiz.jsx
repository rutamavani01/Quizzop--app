import React, { useState, useEffect } from 'react';
import themeColors from '../utils/colors';
import Life_line_btn from '../components/Life_line_btn';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getQuiz } from '../api/Api';
import { useAuth } from '../auth/AuthContext';
const Quiz = () => {
    const { themeColors } = useAuth();
    const location = useLocation();
    const { contest } = location.state || {};
    const contestId = contest?.id;

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [questionSequence, setQuestionSequence] = useState([]);
    const [flippedQuestions, setFlippedQuestions] = useState({});
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(120);
    const [showLifelines, setShowLifelines] = useState(false);
    const [isTimerFrozen, setIsTimerFrozen] = useState(false);
    const [currentOptions, setCurrentOptions] = useState([]);
    const [pollResults, setPollResults] = useState({
        option1: 0,
        option2: 0,
        option3: 0,
        option4: 0,
    });
    const [highlightedOptions, setHighlightedOptions] = useState([]);
    const [disabledOptions, setDisabledOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Fetch and filter questions based on contest ID
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await getQuiz();
                // Filter questions where categoryId matches contest.id
                const filteredQuestions = response.data.filter(
                    question => question.categoryId === contestId
                );
                console.log('Contest ID:', contestId);
                console.log('Filtered Questions:', filteredQuestions);
                setQuestions(filteredQuestions);

                // Initialize with filtered questions length
                if (filteredQuestions.length > 0) {
                    setQuestionSequence([...Array(filteredQuestions.length).keys()]);
                    const firstQuestion = filteredQuestions[0];
                    setCurrentOptions([firstQuestion.A, firstQuestion.B, firstQuestion.C, firstQuestion.D]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching questions:', error);
                setLoading(false);
            }
        };

        if (contestId) {
            fetchQuestions();
        } else {
            setLoading(false);
        }
    }, [contestId]);

    useEffect(() => {
        if (questions.length > 0 && currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            setCurrentOptions([currentQuestion.A, currentQuestion.B, currentQuestion.C, currentQuestion.D]);
            setPollResults({
                option1: 0,
                option2: 0,
                option3: 0,
                option4: 0,
            });
        }
    }, [currentQuestionIndex, questions]);

    useEffect(() => {
        if (questions.length > 0 && currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            setCurrentOptions([currentQuestion.A, currentQuestion.B, currentQuestion.C, currentQuestion.D]);
            setPollResults({
                option1: 0,
                option2: 0,
                option3: 0,
                option4: 0,
            });
        }
    }, [currentQuestionIndex, questions]);

    useEffect(() => {
        if (!isTimerFrozen) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => {
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
        setHighlightedOptions([]);
        setDisabledOptions([]);
        setSelectedAnswer(null);
    }, [currentQuestionIndex]);

    const handleAnswerSelect = (selectedOptionIndex) => {
        if (selectedAnswer !== null || !questions[currentQuestionIndex]) return;

        setSelectedAnswer(selectedOptionIndex);

        // Convert selected index to letter (0=A, 1=B, etc.)
        const selectedLetter = String.fromCharCode(65 + selectedOptionIndex);
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (selectedLetter === correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (isTimerFrozen) {
            setIsTimerFrozen(false);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setSelectedAnswer(null);
            } else {
                navigate('/contest-rank', {
                    state: {
                        score: score + (selectedLetter === correctAnswer ? 1 : 0),
                    },
                });
            }
        }, 1000);
    };

    const handleFiftyFifty = () => {
        if (!questions[currentQuestionIndex]) return;

        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswerIndex = ['A', 'B', 'C', 'D'].indexOf(currentQuestion.answer);

        // Get all incorrect option indices
        const incorrectIndices = [0, 1, 2, 3]
            .filter(index => index !== correctAnswerIndex);

        // Randomly select one incorrect option to keep
        const randomIncorrectIndex = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];

        // Set two options to be enabled: the correct one and one random incorrect one
        const enabledOptions = [correctAnswerIndex, randomIncorrectIndex];
        setDisabledOptions([0, 1, 2, 3].filter(index => !enabledOptions.includes(index)));
        setHighlightedOptions(enabledOptions);
    };

    const handleFlipQuestion = () => {
        // Get remaining questions (excluding current)
        const remainingQuestions = questions.filter((_, index) =>
            index !== questionSequence[currentQuestionIndex]
        );

        if (remainingQuestions.length > 0) {
            // Randomly select a new question
            const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
            const newQuestion = remainingQuestions[randomIndex];
            const newQuestionOriginalIndex = questions.findIndex(q => q === newQuestion);

            // Store the current question to bring it back later
            setFlippedQuestions(prev => ({
                ...prev,
                [currentQuestionIndex]: {
                    originalQuestion: questions[questionSequence[currentQuestionIndex]],
                    flippedQuestion: newQuestion
                }
            }));

            // Update options for the new question
            setCurrentOptions([
                newQuestion.A,
                newQuestion.B,
                newQuestion.C,
                newQuestion.D
            ]);

            // Update the sequence array but keep currentQuestionIndex the same
            setQuestionSequence(prev => {
                const newSequence = [...prev];
                newSequence[currentQuestionIndex] = newQuestionOriginalIndex;
                return newSequence;
            });

            // Reset states for new question
            setSelectedAnswer(null);
            setHighlightedOptions([]);
            setDisabledOptions([]);
            setPollResults({
                option1: 0,
                option2: 0,
                option3: 0,
                option4: 0,
            });
        } else {
            alert("No more questions available to flip!");
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            const nextQuestionIndex = questionSequence[currentQuestionIndex + 1];
            const nextQuestion = questions[nextQuestionIndex];

            setCurrentOptions([
                nextQuestion.A,
                nextQuestion.B,
                nextQuestion.C,
                nextQuestion.D
            ]);

            setSelectedAnswer(null);
            setHighlightedOptions([]);
            setDisabledOptions([]);
            setPollResults({
                option1: 0,
                option2: 0,
                option3: 0,
                option4: 0,
            });
        } else {
            navigate('/contest-rank', { state: { score } });
        }
    };

    const getCurrentQuestion = () => {
        const sequenceIndex = questionSequence[currentQuestionIndex];
        return questions[sequenceIndex];
    };

    const getButtonStyle = (index) => {
        const baseStyle = {
            backgroundColor: getButtonColor(index),
            padding: '10px 15px',
            borderRadius: '9px',
            width: '95%',
            color: themeColors.colors.text,
            border: highlightedOptions.includes(index) ? '3px solid #FFA500' : 'none',
            transition: 'opacity 0.3s ease'
        };

        if (disabledOptions.includes(index)) {
            return {
                ...baseStyle,
                opacity: 0.5,
                cursor: 'not-allowed',
                backgroundColor: themeColors.colors.backgroundColor, // or any other color you want for disabled state
            };
        }

        return baseStyle;
    };


    const getButtonColor = (optionIndex) => {
        if (highlightedOptions.includes(optionIndex)) {
            return themeColors.colors.headingText; // Highlight color for remaining options
        }

        if (selectedAnswer === null) {
            return themeColors.colors.backgroundColor; // Default button color
        }

        const currentQuestion = questions[currentQuestionIndex];
        if (!currentQuestion) return themeColors.colors.backgroundColor;

        const selectedLetter = String.fromCharCode(65 + optionIndex);
        const correctAnswer = currentQuestion.answer;

        if (selectedLetter === correctAnswer) {
            return themeColors.colors.currectBtn; // Correct answer color
        }

        if (optionIndex === selectedAnswer && selectedLetter !== correctAnswer) {
            return themeColors.colors.wrongBtn; // Wrong answer color
        }

        return themeColors.colors.backgroundColor;
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{ height: '100vh', width: '100%' }}>
                <div
                    className="container p-0 text-center text-light"
                    style={{
                        backgroundColor: themeColors.colors.backgroundColor,
                        maxWidth: '492px',
                        border: '4px solid',
                        borderColor: themeColors.colors.borderColor,
                        height: '100vh'
                    }}
                >
                    <div className='d-flex justify-content-between align-items-center p-3'>
                        <div>
                            <span className='fw-bold' style={{ color: themeColors.colors.text }}>Your Score: {score}</span>
                        </div>
                        <div>
                            <span className='me-3' style={{
                                backgroundColor: themeColors.colors.SecondbgColor,
                                borderColor: themeColors.colors.borderColor,
                                border: '1px solid',
                                padding: '6px',
                                borderRadius: '50%',
                                fontSize: '11px',
                                opacity: isTimerFrozen ? 0.5 : 1
                            }}>
                                {timeLeft}
                            </span>
                        </div>
                    </div>

                    <div className='card p-3 m-3' style={{ backgroundColor: themeColors.colors.SecondbgColor }}>
                        <div className='d-flex justify-content-between' style={{ color: themeColors.colors.headingText }}>
                            <div className='fw-bold mb-3'>{currentQuestionIndex + 1} / {questions.length}</div>
                        </div>

                        <div>
                            <h5 className='mb-5' style={{ color: themeColors.colors.text }}>
                                {getCurrentQuestion()?.question}
                            </h5>
                            <div className='d-flex justify-content-center flex-wrap'>
                                {currentOptions.map((option, index) => (
                                    <div key={index} className='col-6 mb-3 position-relative'>
                                        <button
                                            className='border-0 fw-bold'
                                            onClick={() => !disabledOptions.includes(index) && handleAnswerSelect(index)}
                                            style={getButtonStyle(index)}
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
                                                    backgroundColor: themeColors.colors.borderColor,
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                                                    margin: '0 auto'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: `${pollResults[`option${index + 1}`]}%`,
                                                        height: '100%',
                                                        borderRadius: '8px',
                                                        backgroundColor: themeColors.colors.headingText,
                                                        transition: 'width 0.3s ease',
                                                        marginTop: '10px',
                                                    }}
                                                />
                                                <span
                                                    className="position-absolute"
                                                    style={{
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        fontSize: '10px',
                                                        fontWeight: 'bold',
                                                        color: themeColors.colors.text
                                                    }}
                                                >
                                                    {pollResults[`option${index + 1}`]}%
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="custom-button"
                        style={{
                            border: '1px solid',
                            borderColor: themeColors.colors.borderColor,
                        }}
                        onClick={() => setShowLifelines(true)}
                    >
                        <img src="./images/ecg-lines.png" alt="lifeline-icon" /> USE A LIFELINE
                    </button>

                    {showLifelines && (
                        <Life_line_btn
                            onClose={() => setShowLifelines(false)}
                            currentQuestionIndex={currentQuestionIndex}
                            onFiftyFifty={handleFiftyFifty}
                            setPollResults={setPollResults}
                            setIsTimerFrozen={setIsTimerFrozen}
                            onFlipQuestion={handleFlipQuestion}  
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;