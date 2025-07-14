import React from 'react'
import styles from '../styles/Background.module.css'

function Background() {
  return (
    <div className={styles.container}>
  <div className={styles.background}></div>
  <div className={styles.purpleGlow}></div>
  <div className={styles.cyanGlow}></div>
  <div className={styles.indigoGlow}></div>
  
</div>
  )
}

export default Background