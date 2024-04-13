import styles from './addQuiz.module.scss';



function AddQuiz() {
  return (
    <section className={styles.container}>
        Добавить квиз
        <form action="">
          <input type="text" placeholder='Вопрос'/>
        </form>
    </section>
  );
}

export default AddQuiz;
