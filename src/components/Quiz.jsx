import React, { useEffect, useMemo } from 'react';
import Card from './Card';
import { decodeHTML } from '../utils/decoder';

const Quiz = ({ question, total, currentIdx, onAnswer, timeLeft, setTimeLeft }) => {
  
  const shuffledOptions = useMemo(() => {
    if (!question) return [];
    return [...question.incorrect_answers, question.correct_answer]
      .sort(() => Math.random() - 0.5);
  }, [question]);

useEffect(() => {
  if (timeLeft === 0) {
    onAnswer(null); 
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft(prev => prev - 1);
  }, 1000);
  return () => clearInterval(timer);
}, [timeLeft, onAnswer, setTimeLeft]);;

  return (
    <Card>
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="progress-pill">
            Soal <span>{currentIdx + 1}</span> dari {total}
          </div>
          <div className={`timer-pill ${timeLeft < 10 ? 'urgent' : ''}`}>
            {timeLeft}s
          </div>
        </div>

        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
          ></div>
        </div>

        <div className="question-area">
          <h3 className="question-text">
            {decodeHTML(question.question)}
          </h3>
        </div>

        <div className="options-grid">
          {shuffledOptions.map((opt, i) => (
            <button 
              key={i} 
              className="option-btn animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => onAnswer(opt)}
            >
              <span className="option-label">{String.fromCharCode(65 + i)}</span>
              <span className="option-text">{decodeHTML(opt)}</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Quiz;