import styles from './quizPage.module.scss';

import { useState, useEffect } from 'react';

import Quiz from '../../components/quiz/Quiz';
import Button from '../../components/ui/button/button';

import { formatTime } from '../../utils/formatTime';

function QuizPage() {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [time, setTime] = useState(600);

  useEffect(() => {
    if (isTestStarted) {
      const interval = setInterval(() => {
       setTime(prevTime => prevTime - 1);
  
         if (time <= 0) { // проверка если время закончилось
          clearInterval(interval);
          console.log('Время вышло!');
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [isTestStarted, time]);

  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <div className={styles.heading_action}>
          <h1 className={styles.heading_title}>Тестирование</h1>
          <span>{formatTime(time)}</span>
        </div>
        <div className={styles.step_line}>Steps</div>
      </header>
      <section className={styles.content}>
        {isTestStarted ? (
          <>
            <h2 className={styles.content_title}>
              Какая из следующих планет не имеет естественных спутников?
            </h2>
            <Quiz />
          </>
        ) : (
          <>
            <Button onClick={() => setIsTestStarted(true)}>Начать тест</Button>
            <span>после начала теста запустится таймер (будьте готовы)</span>
          </>
        )}
      </section>
    </section>
  );
}

export default QuizPage;
