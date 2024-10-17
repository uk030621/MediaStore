// app/services/page.js
import styles from '@/styles/Home.module.css'; // Import the CSS module

export default function ServicesPage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.gradientText}>Our Services</h1>
      <p className={styles.description}>
      Explore the services we offer to our clients.
      </p>
    </div>
  );
}