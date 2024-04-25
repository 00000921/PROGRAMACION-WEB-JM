import React from 'react';

const ProgressTracker = ({ totalQuestions, currentQuestion, answers }) => {
    const answeredQuestions = answers.filter(answer => answer !== undefined).length;

    return (
        <div className="progress-tracker">
            <div className="progress-bar">
                {Array(totalQuestions).fill(null).map((_, index) => (
                    <div
                        key={index}
                        className={`progress-bar-item ${index < answeredQuestions ? 'answered' : 'unanswered'}`}
                    />
                ))}
            </div>
            <div className="progress-text">
                <p>Respondidas: {answeredQuestions}</p>
                <p>Pendientes: {totalQuestions - answeredQuestions}</p>
            </div>
        </div>
    );
};

export default ProgressTracker;
