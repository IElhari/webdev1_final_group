import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const GymFooter = () => {
  
  return (
    <footer className={styles.footer} id="ConnectWithUs">
      <div className={styles.branding}>
        <Image className="gymLogo" src="/gymLogo.png" alt="Fitness Club Logo" width={80} height={80} />
        <h3>Fitness Club</h3>
      </div>

      <div className={styles.contactInfo}>
        <a href="#" className={styles.linkItem}>Email: contact@fitnessclub.com</a>
        <a href="#" className={styles.linkItem}>Phone: +1 123 456 7890</a>
      </div>

      <div className={styles.socialMedia}>
        <a href="#" className={styles.linkItem}>Instagram</a>
        <a href="#" className={styles.linkItem}>Facebook</a>
        <a href="#" className={styles.linkItem}>YouTube</a>
      </div>

      <div className={styles.disclaimer}>
        <p>© 2023 Fitness Club. Stay Fit, Stay Awesome!</p>
        <Link href="/privacy.html" className={styles.linkItem}>Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default GymFooter;
