import React, { useState } from 'react';
import { questions } from '../utils/utils';
import { useAuth } from '../auth/AuthContext';

const Life_line_btn = ({
    onClose,
    currentQuestionIndex,
    onFiftyFifty,
    setPollResults,
    setIsTimerFrozen,
    onFlipQuestion
}) => {
    const { themeColors } = useAuth();
    const [usedLifelines, setUsedLifelines] = useState({
        fifty: false,
        polling: false,
        freeze: false,
        flip: false,
    });

    const boxStyle = (used) => ({
        border: '1px solid',
        borderColor: used ? '#d3d3d3' : '#ffcc5b',
        borderRadius: '50%',
        padding: '20px',
        width: '100%',
        height: '100%',
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        cursor: used ? 'not-allowed' : 'pointer',
        opacity: used ? 0.5 : 1,
    });

    // const handleFiftyFifty = () => {
    //     if (!usedLifelines.fifty) {
    //         const currentQuestion = questions[currentQuestionIndex];
    //         const correctAnswerIndex = currentQuestion.answer;

    //         const incorrectIndices = currentQuestion.options
    //             .map((_, index) => index)
    //             .filter(index => index !== correctAnswerIndex);

    //         // Randomly select two incorrect indices to disable
    //         const indicesToDisable = [
    //             incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)],
    //             incorrectIndices.filter(index =>
    //                 index !== incorrectIndices[0]
    //             )[Math.floor(Math.random() * (incorrectIndices.length - 1))]
    //         ];

    //         // Highlight the correct answer and a non-disabled option
    //         const highlightIndices = [
    //             correctAnswerIndex,
    //             currentQuestion.options.findIndex((_, index) =>
    //                 !indicesToDisable.includes(index) && index !== correctAnswerIndex
    //             )
    //         ];

    //         // Dispatch events to parent components
    //         window.dispatchEvent(new CustomEvent('fiftyFifty', {
    //             detail: {
    //                 disabledOptions: indicesToDisable,
    //                 highlightedOptions: highlightIndices
    //             }
    //         }));

    //         setUsedLifelines(prevState => ({
    //             ...prevState,
    //             fifty: true
    //         }));
    //     }
    // };

    const handleFiftyFifty = () => {
        if (!usedLifelines.fifty) {
            onFiftyFifty();
            setUsedLifelines(prevState => ({
                ...prevState,
                fifty: true
            }));
        }
    };

    const handlePolling = () => {
        if (!usedLifelines.polling) {
            const currentQuestion = questions[currentQuestionIndex];
            const correctAnswerIndex = currentQuestion.answer;

            const percentages = [0, 0, 0, 0];
            const correctPercentage = Math.floor(Math.random() * 31) + 40; // 40-70%
            const remainingPercentage = 100 - correctPercentage;

            const incorrectIndices = currentQuestion.options
                .map((_, index) => index)
                .filter(index => index !== correctAnswerIndex);

            const option1Percentage = Math.floor(Math.random() * (remainingPercentage / 2));
            const option2Percentage = remainingPercentage - option1Percentage;

            percentages[correctAnswerIndex] = correctPercentage;
            percentages[incorrectIndices[0]] = option1Percentage;
            percentages[incorrectIndices[1]] = option2Percentage;

            setPollResults({
                option1: percentages[0],
                option2: percentages[1],
                option3: percentages[2],
                option4: percentages[3],
            });

            setUsedLifelines(prevState => ({
                ...prevState,
                polling: true
            }));
        }
    };

    const handleFreezeTimer = () => {
        if (!usedLifelines.freeze) {
            setIsTimerFrozen(true);
            setUsedLifelines(prevState => ({
                ...prevState,
                freeze: true
            }));
        }
    };

    // const handleFlipQuestion = () => {
    //     if (!usedLifelines.flip) {
    //         const remainingQuestions = questions.filter((q, index) => index !== currentQuestionIndex);

    //         if (remainingQuestions.length > 0) {
    //             const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    //             const newQuestion = remainingQuestions[randomIndex];

    //             window.dispatchEvent(new CustomEvent('flipQuestion', {
    //                 detail: {
    //                     newQuestion: newQuestion,
    //                     newQuestionIndex: questions.indexOf(newQuestion)
    //                 }
    //             }));

    //             setUsedLifelines(prevState => ({
    //                 ...prevState,
    //                 flip: true
    //             }));
    //         } else {
    //             alert("No more questions available to flip!");
    //         }
    //     }
    // };

    const handleFlipQuestion = () => {
        if (!usedLifelines.flip) {
            onFlipQuestion();  // Call the prop function
            setUsedLifelines(prevState => ({
                ...prevState,
                flip: true
            }));
        }
    };


    return (
        <div className="d-flex col-12 flex-wrap mt-5">
            <div className="col-3 d-flex justify-content-center align-items-center text-center">
                <div>
                    <div
                        style={boxStyle(usedLifelines.fifty)}
                        onClick={() => !usedLifelines.fifty && handleFiftyFifty()}
                    >
                        <img src="./images/fifty.png" alt="50:50" />
                    </div>
                    <p className="d-block mt-2 pb-4">50:50</p>
                </div>

            </div>

            <div className="col-3 d-flex justify-content-center align-items-center text-center">
                <div>
                    <div
                        style={boxStyle(usedLifelines.polling)}
                        onClick={() => !usedLifelines.polling && handlePolling()}
                    >
                        <img src="./images/polling.png" alt="Audience Poll" />
                    </div>
                    <p className="d-block mt-2">Audience<br />Poll</p>
                </div>
            </div>

            <div className="col-3 d-flex justify-content-center align-items-center text-center">
                <div>
                    <div
                        style={boxStyle(usedLifelines.freeze)}
                        onClick={() => !usedLifelines.freeze && handleFreezeTimer()}
                    >
                        <img src="./images/clock.png" alt="Freeze Timer" />
                    </div>
                    <p className="d-block mt-2">Freeze<br />Timer</p>
                </div>
            </div>

            <div className="col-3 d-flex justify-content-center align-items-center text-center">
                <div>
                    <div
                        style={boxStyle(usedLifelines.flip)}
                        onClick={() => !usedLifelines.flip && handleFlipQuestion()}
                    >
                        <img src="./images/repeat.png" alt="Flip Question" />
                    </div>
                    <p className="d-block mt-2">Flip<br />Question</p>
                </div>
            </div>

            <div className="col-3 d-flex justify-content-center align-items-center text-center m-auto">
                <button
                    className="custom-button mt-3"
                    style={{
                        border: '1px solid',
                        borderColor: themeColors.colors.borderColor,
                    }}
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Life_line_btn;