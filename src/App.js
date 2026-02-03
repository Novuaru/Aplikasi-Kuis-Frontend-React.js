import React, { useEffect, useCallback } from 'react';
import { useQuizPersistence } from './hooks/useQuizPersistence';
import Login from './components/Login';
import StartMenu from './components/StartMenu';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Skeleton from './components/Skeleton';
import './styles/App.css';

const API_URL = "https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple";

const STORAGE_KEYS = {
  USER: 'quiz_user',
  DATA: 'quiz_data',
  IDX: 'quiz_idx',
  ANSWERS: 'quiz_answers',
  TIMER: 'quiz_timer',
  STARTED: 'quiz_started',
  HISTORY: 'quiz_history',
  FINISHED: 'quiz_finished'
};

function App() {
  const [user, setUser] = useQuizPersistence(STORAGE_KEYS.USER, null);
  const [questions, setQuestions] = useQuizPersistence(STORAGE_KEYS.DATA, []);
  const [currentIdx, setCurrentIdx] = useQuizPersistence(STORAGE_KEYS.IDX, 0);
  const [answers, setAnswers] = useQuizPersistence(STORAGE_KEYS.ANSWERS, []);
  const [timeLeft, setTimeLeft] = useQuizPersistence(STORAGE_KEYS.TIMER, 60);
  const [isStarted, setIsStarted] = useQuizPersistence(STORAGE_KEYS.STARTED, false);
  const [isFinished, setIsFinished] = useQuizPersistence(STORAGE_KEYS.FINISHED, false);

  useEffect(() => {
    if (user && questions.length === 0) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          if (data.results) setQuestions(data.results);
        })
        .catch((err) => console.error("Gagal mengambil data kuis:", err));
    }
  }, [user, questions.length, setQuestions]);

  const saveToHistory = useCallback((score) => {
    const newScore = {
      score: score,
      date: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })
    };
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)) || [];
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([newScore, ...history].slice(0, 5)));
  }, []);

  useEffect(() => {
    if (user && questions.length > 0) {
      if (currentIdx >= questions.length) {
        if (!isFinished) {
          const correctCount = answers.filter((ans, i) => ans === questions[i]?.correct_answer).length;
          saveToHistory(correctCount * 10);
          setIsFinished(true);
          setIsStarted(false); 
        }
      }
    }
  }, [currentIdx, questions, user, setIsStarted, setIsFinished, answers, isFinished, saveToHistory]);

  const handleAnswer = useCallback((selected) => {
    setAnswers((prev) => [...prev, selected]);
    setCurrentIdx((prev) => prev + 1);
    setTimeLeft(60); 
  }, [setAnswers, setCurrentIdx, setTimeLeft]);

  const handleBackToMenu = () => {
    setCurrentIdx(0);
    setAnswers([]);
    setTimeLeft(60);
    setIsFinished(false);
    setIsStarted(false);
    setQuestions([]); 
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  if (!user) return <div className="app-container"><Login onLogin={setUser} /></div>;

  if (isFinished) {
    return (
      <div className="app-container">
        <Result questions={questions} answers={answers} onRestart={handleBackToMenu} />
      </div>
    );
  }

  if (!isStarted) {
    return (
      <div className="app-container">
        <StartMenu user={user} onStart={() => setIsStarted(true)} onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div className="app-container">
      {questions.length > 0 && questions[currentIdx] ? (
        <Quiz 
          question={questions[currentIdx]}
          total={questions.length}
          currentIdx={currentIdx}
          onAnswer={handleAnswer}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      ) : (
        <Skeleton /> 
      )}
    </div>
  );
}

export default App;