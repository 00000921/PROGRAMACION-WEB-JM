import React from 'react';
import '../assets/home.css'
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();

    function handleStartQuiz() {
        navigate('/Quizzes');
    }
    return (
        <div className="home-container">
        <h1>
            TRIVIA QUIEN QUIERE SER MILLONARIO
            </h1>
        <div className="button-container">
            <Button text={"Start"} onClick={handleStartQuiz} />
            <Button text={"Stats"} onClick={() => navigate('/questions')} />
        </div>
</div>

    );
};

export default Home;
