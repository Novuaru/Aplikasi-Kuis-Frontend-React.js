import React from 'react';
import Card from './Card';

const Result = ({ questions, answers, onRestart }) => {
  const correctCount = answers.filter((ans, i) => ans === questions[i]?.correct_answer).length;
  const totalQuestions = questions.length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  return (
    <Card title="Kuis Selesai">
      <div className="result-container">
        <div className="score-circle">
          <div className="score-value-big">{score}</div>
          <div className="score-label">Skor Akhir</div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Total Soal</span>
            <span className="stat-number">{totalQuestions}</span>
          </div>
          <div className="stat-card green-border">
            <span className="stat-label">Benar</span>
            <span className="stat-number">{correctCount}</span>
          </div>
          <div className="stat-card red-border">
            <span className="stat-label">Salah</span>
            <span className="stat-number">{totalQuestions - correctCount}</span>
          </div>
        </div>

        <div className="menu-buttons" style={{ marginTop: '2rem' }}>
          <button onClick={onRestart} className="btn-primary start-btn">
            Kembali ke Menu Utama
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Result;