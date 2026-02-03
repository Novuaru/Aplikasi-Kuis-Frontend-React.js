import React from 'react';

const Skeleton = () => {
  return (
    <div className="quiz-card skeleton-container animate-pulse">
      <div className="quiz-header">
        {/* Placeholder Badge */}
        <div className="skeleton-item badge-skeleton"></div>
        {/* Placeholder Timer */}
        <div className="skeleton-item timer-skeleton"></div>
      </div>

      {/* Placeholder Question */}
      <div className="skeleton-item question-line"></div>
      <div className="skeleton-item question-line short"></div>

      {/* Placeholder Options */}
      <div className="options-grid">
        <div className="skeleton-item option-skeleton"></div>
        <div className="skeleton-item option-skeleton"></div>
        <div className="skeleton-item option-skeleton"></div>
        <div className="skeleton-item option-skeleton"></div>
      </div>
    </div>
  );
};

export default Skeleton;