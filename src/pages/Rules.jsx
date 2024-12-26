import React from 'react'
import themeColors, { dotText, footer_btn, loginButton } from '../utils/colors'
import See_all_header from '../components/See_all_header'
import { useNavigate } from 'react-router'

export const Rules = () => {
    const navigate = useNavigate()
    const handleBackHome = () => {
        navigate('/start-screen')
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
            }} >
                <See_all_header />
                <div className="container p-2 p-0 text-center text-light " style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.borderColor }}>
                    <div className='p-3 text-start'>
                        <h3 style={{color:themeColors.headingText}}>Rules</h3>

                        <ul style={{ padding: '15px' }}>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                Each Quiz Contest lasts for a total of 90 - 150 seconds. In the given time, you are given a total of 10-30 questions to answer. The amount of time and number of questions may vary for each contest.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                If you answer a question correctly, you get 20 points.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                If your answer for a question is wrong, you get (-) 10 points.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                On answering 3 questions correctly in a row, you get a bonus of 10 points.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                Every Quiz Contest has a fixed start and end time. At the end of the Quiz Contest, every participant's score is put on a leaderboard and the winners are decided on the basis of their scores.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                Winners for each Quiz Contest are declared within 30 minutes of the end of the Quiz Contest.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                You can take help by using lifelines while playing the contest.
                                There are 4 different lifelines :

                                <ol style={{ marginTop: dotText.marginTop }}>  50:50 - Two incorrect options will be removed from the questions.</ol>
                                <ol style={{ marginTop: dotText.marginTop }}>Audience Poll - The smart audience will help you to select the correct answer among the options present.</ol>
                                <ol style={{ marginTop: dotText.marginTop }}> Freeze Timer - The ongoing timer will be paused for 30 seconds, giving the user more time to answer the question.</ol>
                                <ol style={{ marginTop: dotText.marginTop }}>Flip Question - The current question will be interchanged by a new question.</ol>
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                You will be able to use each lifeline only once in each contest.
                            </li>
                            <li style={{ color: themeColors.SecondbgColor, fontSize: dotText.fontSize, fontWeight: dotText.fontWeight, marginBottom: dotText.marginBottom }}>
                                You'll be able to use the lifeline for free by watching an ad or by using a given amount of coins from your coin balance.
                            </li>
                        </ul>

                        <button className='m-auto  d-flex justify-content-center topic-btn' onClick={handleBackHome} style={{ width: loginButton.width, fontWeight: loginButton.fontWeight, fontSize: loginButton.fontSize, background: footer_btn.background, color: footer_btn.color, }}>BACK TO HOME</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
