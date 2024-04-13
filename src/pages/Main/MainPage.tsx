import styles from './main.module.scss';

import { Link } from 'react-router-dom';

import Button from '../../components/ui/button/button';

function MainPage() {
    localStorage.clear()
    console.log(localStorage)
  return (
    <section className={styles.container}>
      <div>
        <Link to="/quiz">
          <Button>Перейти к тестированию</Button>
        </Link>
        <Link to="/add">
          <Button>Добавить вопрос</Button>
        </Link>
      </div>
      <div className={styles.container_description}>Сегодня мы проведем небольшой тест, чтобы проверить ваше понимание учебного материала. В тесте вас ждут различные типы вопросов: от простых выборов с двумя вариантами ответа до вопросов, требующих более развернутого ответа. Пожалуйста, старайтесь отвечать максимально точно и подробно. Время на выполнение теста ограничено - всего 10 минут, поэтому пожалуйста, работайте быстро и внимательно. Удачи!</div>
    </section>
  );
}

export default MainPage;
