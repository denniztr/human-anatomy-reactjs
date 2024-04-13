import styles from './quizPage.module.scss';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { formatTime } from '../../utils/formatTime';
import Button from '../../components/ui/button/button';
import { data } from '../../mockdata/quiz';

type Answer = string | string[];

function QuizPage() {
  // const [time, setTime] = useState(600);

  const [time, setTime] = useState<number>(
    parseInt(localStorage.getItem('time') || '600')
  );

  const [currentQuestion, setCurrentQuestion] = useState<number>(
    parseInt(localStorage.getItem('currentQuestion') || '0')
  );

  //const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  // const [answers, setAnswers] = useState<Answer>([]);

  const [answers, setAnswers] = useState<Answer>(
    JSON.parse(localStorage.getItem('answers') || '[]')
  );
  const [isTestFinished, setIsTestFinished] = useState<boolean>(
    localStorage.getItem('isTestFinished') === 'true' ? true : false
  );
  // const [isTestFinished, setIsTestFinished] = useState(false);

  const { questions } = data;

  useEffect(() => {

    localStorage.setItem('time', time.toString());
    localStorage.setItem('currentQuestion', currentQuestion.toString());
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('isTestFinished', isTestFinished.toString());

  }, [time, currentQuestion, answers, isTestFinished]);



  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (isTestFinished) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [time, isTestFinished]);


  const { register, handleSubmit } = useForm();

  const onSubmit = (values: []) => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion + 1 === questions.length) {
      setIsTestFinished(true);
      console.log(localStorage)
      console.log('Конец опроса!')
    }

    setAnswers((prevAnswers) => [...prevAnswers, values]);
  };



  const startTestAgain = () => {
    console.log('----Очищаем localStorage и состояния, начинаем тест ещё раз с пустыми значениями----')

    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('answers');
    localStorage.removeItem('isTestFinished');

    
    setTime(600);
    setCurrentQuestion(0);
    setAnswers([]);
    setIsTestFinished(false);
  }

  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        {!isTestFinished && (
          <div className={styles.heading_action}>
            <h1 className={styles.heading_title}>Тестирование</h1>
            <span>{formatTime(time)}</span>
          </div>
        )}
      </header>
      <section className={styles.content}>
        {isTestFinished ? (
          <div className={styles.content__test_result}>
            <p>Тест закончился</p>
            <p>Время выполнения: {formatTime(time)}</p>
            <Button onClick={() => startTestAgain()}>Начать тест заново</Button>
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
