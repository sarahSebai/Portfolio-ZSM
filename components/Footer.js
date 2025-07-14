import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2025 Sarah Sebai All rights reserved.</p>
      <div className={styles.icons}>
        <a href="https://wa.me/3366799361" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.svg" alt="Whatsapp" className={styles.icon} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/tiktok.svg" alt="TikTok" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className={styles.icon} />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="/google.svg" alt="Google" className={styles.icon} />
        </a>
        <a href="https://github.com/sarahSebai" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className={styles.icon} />
        </a>
      </div>
    </div>
  )
}

export default Footer