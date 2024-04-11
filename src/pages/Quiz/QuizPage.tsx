import styles from './quizPage.module.scss';
import Quiz from '../../components/quiz/Quiz';
import Button from '../../components/ui/button/button';


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
        <Quiz />
      </section>
    </section>
  );
}

export default QuizPage;
