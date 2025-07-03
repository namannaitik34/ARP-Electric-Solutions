// components/InteractiveCard.tsx
import styles from "./InteractiveCard.module.css";
import { FaUserCircle } from "react-icons/fa";

export default function InteractiveCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.slide} ${styles.slide1}`}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <FaUserCircle className={styles.fa} />
            </div>
          </div>
        </div>

        <div className={`${styles.slide} ${styles.slide2}`}>
          <div className={styles.content}>
            <h3>Hello there!</h3>
            <p>Trust yourself and keep going.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
