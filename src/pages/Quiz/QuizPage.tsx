import styles from './quizPage.module.scss';

import { useState } from 'react';
import { formatTime } from '../../utils/formatTime';

import Button from '../../components/ui/button/button';

import { data } from '../../mockdata/quiz';

function QuizPage() {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [time, setTime] = useState(600);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isTestFinished, setIsTestFinished] = useState(false);

  const { questions } = data;
  const { question, options, user_answer } = questions[currentQuestion];

  console.log(questions);

  const handleNextQuestionClick = () => {
    if (answer !== '') {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      user_answer.push(answer);
    } else {
      console.log('Выберите ответ')
    }

  };
  console.log(questions);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };


  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <div className={styles.heading_action}>
          <h1 className={styles.heading_title}>Тестирование</h1>
          <span>{formatTime(time)}</span>
        </div>
        <div className={styles.step_line}>Вопросов: {questions.length}</div>
      </header>
      <section className={styles.content}>
        {isTestFinished ? (
          <>
            <p>Тест закончился</p>
            <Button onClick={() => setIsTestFinished(false)}>Начать тест заново</Button>
          </>
        ) : (
          <>
            {questions[currentQuestion].question}
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  onChange={handleAnswerChange}
                />
                <label htmlFor="value">{option}</label>
                <br />
              </div>
            ))}
            <div>
              <Button onClick={() => handleNextQuestionClick()}>
                Ответить
              </Button>
            </div>
          </>
        )}
      </section>
    </section>
  );
}

export default QuizPage;
