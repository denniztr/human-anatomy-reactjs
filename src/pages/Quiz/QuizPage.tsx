import styles from './quizPage.module.scss';

import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formatTime } from '../../utils/formatTime';
import Button from '../../components/ui/button/button';
import { data } from '../../mockdata/quiz';

type Answer = string | string[];

function QuizPage() {
  const [time, setTime] = useState(600);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer>([]);
  const [isTestFinished, setIsTestFinished] = useState(false);

  const { questions } = data;

  const { register, handleSubmit } = useForm();

  const onSubmit = (values: []) => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion + 1 === questions.length) {
      setIsTestFinished(true);
      console.log('Конец опроса');
    }

    setAnswers((prevAnswers) => [...prevAnswers, values]);

  };


  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <div className={styles.heading_action}>
          <h1 className={styles.heading_title}>Тестирование</h1>
          <span>{formatTime(time)}</span>
        </div>
      </header>
      <section className={styles.content}>
        {isTestFinished ? (
          <div>
            <p>Тест закончился</p>
          </div>
        ) : (
          <>
            {questions[currentQuestion]?.question}
            <form onSubmit={handleSubmit(onSubmit)}>
              {questions[currentQuestion]?.type === 'radio' && (
                <ul>
                  {questions[currentQuestion].options?.map((option, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        {...register('ответ', { required: true })}
                        value={option}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              {questions[currentQuestion]?.type === 'checkbox' && (
                <ul>
                  {questions[currentQuestion].options?.map((option, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        {...register('ответ', { required: true })}
                        value={option}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              {questions[currentQuestion]?.type === 'textarea' && (
                <textarea
                  rows={6}
                  cols={100}
                  {...register('ответ', { required: true })}
                />
              )}
              <div>
                <Button type="submit">Ответить</Button>
              </div>
            </form>
          </>
        )}
      </section>
    </section>
  );
}

export default QuizPage;
