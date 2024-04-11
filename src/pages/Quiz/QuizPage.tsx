import { useEffect, useState } from 'react';

import Button from '../../components/ui/button/button';

// import timer from '../../utils/timer';

import styles from './quiz.module.scss';

function QuizPage() {
  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <div className={styles.heading_action}>
          <h1 className={styles.heading_title}>Тестирование</h1>
          <Button>Начать</Button>
          <span>после начала теста запустится таймер (будьте готовы)</span>
        </div>
        <div className={styles.step_line}>Steps</div>
      </header>
      <section className={styles.content}>
        <h2 className={styles.content_title}>
          Какая из следующих планет не имеет естественных спутников?
        </h2>
        <div className={styles.content_body}>
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
      </section>
    </section>
  );
}

export default QuizPage;
