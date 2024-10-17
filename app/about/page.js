// app/about/page.js
import styles from '@/styles/Home.module.css'; // Import the CSS module

export default function AboutPage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.gradientText}>Media Store</h1>
      <p className={styles.description}>
      Media Store Goes Here
      </p>
    </div>
  );
}