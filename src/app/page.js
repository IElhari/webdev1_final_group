import styles from './page.module.css'
import { Roboto_Slab, Lato } from 'next/font/google'
import Mailchimpform from '@/components/Mailchimpform';
const roboto = Roboto_Slab({ display: "swap", subsets: ["latin"], weight: ["400", "700"] })
const lato = Lato({ display: "swap", subsets: ["latin"], weight: ["300", "700"] })

export default function GymHome() {
  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img src="/gym.jpg" alt="Gym background" className={styles.heroImage} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Unleash Your Inner Beast</h1>
          <p className={styles.heroSubtitle}>Elevate your fitness game with us!</p>
          <button className={styles.ctaButton}>Join The Challenge</button>
        </div>


      </section>

      {/* Motivation Section */}
      <section className={styles.motivationSection}>
        <h2 className={styles.motivationTitle}>Your Limits Exist Only in the Mind</h2>
        <p className={styles.motivationText}>Join a community that pushes boundaries, breaks barriers, and achieves the unthinkable.</p>
        <button className={styles.exploreButton}>Explore Programs</button>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <Mailchimpform />
      </section>

    </div>
  );
}
