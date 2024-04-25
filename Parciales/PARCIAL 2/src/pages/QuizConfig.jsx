import React, { useEffect, useState } from 'react';
import styles from '../assets/QuizConfis.module.css'
import { useNavigate } from 'react-router';
import Quizz from './Quizz';
import { getQuestions } from '../services/api';

const QuizConfig = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [setConfig, setSetConfig] = useState(false);
  const [questions, setQuestions] = useState([]);



  const handleStartQuiz = async () => {
    const object = {
        amount: 24,
        category: category,
        difficulty: difficulty,
        type: 'multiple',
    }
    const getQuestiones = await getQuestions(object);
    setQuestions(getQuestiones.results);
    setSetConfig(true);
  };
  const goBack = () => {
    navigate('/');
  }


  return (
    <div>
      {setConfig ? (
        <Quizz
          questions={questions}
        />
      ) : (<>
        <h1>DIFICULTAD</h1>
        <form>
  
          <label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="easy">Fácil</option>
              <option value="medium">Intermedia</option>
              <option value="hard">Difícil</option>
            </select>
          </label>
  
          <button type="button" onClick={handleStartQuiz}>
            Comenzar el Quiz
          </button>
          <button style={{ marginTop: "15px", backgroundColor: "#94122c" }} type="button" onClick={goBack}>
            Regresar
          </button>

        </form>
      </>)}
    </div>
  );
};

export default QuizConfig;
