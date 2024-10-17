// app/services/page.js
import styles from '@/styles/Home.module.css'; // Import the CSS module

export default function ServicesPage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.gradientText}>Handy Applications</h1>
      <p className={styles.description}>
      Links To Other Applications Goes Here.
      </p>
    </div>
  );
}