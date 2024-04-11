import styles from './main.module.scss';

import MuscularSystem from '../../components/MuscularSystem';

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container_background}>
        <div className={styles.container_content}>
            <div className={styles.text}>dd</div>
            <div className={styles.image_wrapper}>
              <MuscularSystem height="1400" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
