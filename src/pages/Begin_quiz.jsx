import React from 'react';
import { useLocation } from 'react-router-dom';
import See_all_header from '../components/See_all_header';
import FooterBtn from '../components/Footer-btn';
import { useAuth } from '../auth/AuthContext';

const Begin_quiz = () => {
  const location = useLocation();
  const quiz = location.state?.contest; // Access the passed quiz data
  const { themeColors } = useAuth();

  if (!quiz) return <p>Loading...</p>;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ backgroundColor: themeColors.colors.backgroundColor }}>
        <See_all_header />
        <div
          className="container p-2 p-0 text-center text-light"
          style={{
            maxWidth: '492px',
            width: '492px',
            border: '4px solid',
            borderColor: themeColors.colors.borderColor,
            height: '100vh',
          }}
        >
          <div
            className="p-3 m-4"
            style={{
              backgroundColor: themeColors.colors.SecondbgColor,
              borderRadius: '10px',
              fontWeight: '700',
            }}
          >
            <img src="/images/swords-icon.png" alt="swords-icon" /> Welcome{' '}
            <img src="/images/swords-icon.png" alt="swords-icon" />
            <p>Fearless Quiz Gladiator!</p>

            {/* Dynamic Quiz Image and Title */}
            <div
              style={{
                width: '22%',
                margin: 'auto',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
              }}
            >
              <img
                src={quiz?.image}
                alt={quiz?.title || 'Default'}
                width={70}
                height={70}
              />
              <h5 className="text-dark mt-2" style={{ fontSize: '12px' }}>
                {quiz?.title || 'Default Quiz'}
              </h5>
            </div>

            <p className="begin-quiz-p">Rules are Simple:</p>
            <p className="begin-quiz-p">
              <i className="fa-solid fa-circle fs-12 me-2"></i>5 questions, 50
              seconds. ✅ answer +20, ❌ answer -10.
            </p>
            <p className="begin-quiz-p">
              <i className="fa-solid fa-circle fs-12 me-2"></i>10-seconds
              countdown for each question.
            </p>
            <p className="begin-quiz-p">
              <i className="fa-solid fa-circle fs-12 me-2"></i>Winner is
              announced at the end of the quiz.
            </p>
            <p className="begin-quiz-p">
              <i className="fa-solid fa-circle fs-12 me-2"></i>Winner gets - a
              free ride on the high horse
            </p>
          </div>

          <FooterBtn contest={quiz} />
        </div>
      </div>
    </div>
  );
};

export default Begin_quiz;
