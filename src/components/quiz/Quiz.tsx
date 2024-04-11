import styles from './quiz.module.scss';

import { useEffect, useState } from 'react';

import Button from '../ui/button/button';
import QuizOption from '../quizOption/QuizOption';

import { data } from '../../mockdata/quiz';


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState();

  return (
    <>
      <div className={styles.quiz_container}>
        <input type="radio" id="option1" name="options" value="option1" />
        <label htmlFor="option1">Земля</label>
        <br />
        <input type="radio" id="option2" name="options" value="option2" />
        <label htmlFor="option2">Марс</label>
        <br />
        <input type="radio" id="option3" name="options" value="option3" />
        <label htmlFor="option3">Юпитер</label>
        <br />
        <input type="radio" id="option3" name="options" value="option3" />
        <label htmlFor="option3">Сатурн</label>
      </div>
      <div>
        <Button>Ответить</Button>
      </div>
    </>
  );
};

export default Quiz;
