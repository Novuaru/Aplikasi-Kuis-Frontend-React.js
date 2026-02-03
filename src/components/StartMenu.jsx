import React from 'react';
import Card from './Card';

const StartMenu = ({ user, onStart, onLogout }) => {
  const scoreHistory = JSON.parse(localStorage.getItem('quiz_history')) || [];

  return (
    <Card title="Aplikasi Kuis">
      <div className="menu-content">
        <div className="user-welcome">
          <h3>Selamat Datang, {user}!</h3>
        </div>

        <div className="history-section">
          <div className="section-header">
            <h4>🏆 Riwayat Skor</h4>
            {scoreHistory.length > 0 && <span className="count-badge">{scoreHistory.length}</span>}
          </div>
          
          {scoreHistory.length > 0 ? (
            <ul className="score-list">
              {scoreHistory.map((item, index) => (
                <li key={index} className="score-item animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="score-info">
                    <span className="score-date">{item.date}</span>
                  </div>
                  <div className="score-value">
                    <strong>{item.score}</strong> <small>Pts</small>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-data-card">
              <p>Belum ada aktivitas</p>
            </div>
          )}
        </div>

        <div className="menu-buttons">
          <button onClick={onStart} className="btn-primary start-btn">
            Mulai Kuis Sekarang
          </button>
          <button onClick={onLogout} className="btn-logout-text">
            Logout
          </button>
        </div>
      </div>
    </Card>
  );
};

export default StartMenu;