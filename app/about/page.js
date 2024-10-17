// app/about/page.js
import styles from '@/styles/Home.module.css'; // Import the CSS module

export default function AboutPage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.gradientText}>About Us</h1>
      <p className={styles.description}>
      This page tells more about our services and mission.
      </p>
    </div>
  );
}