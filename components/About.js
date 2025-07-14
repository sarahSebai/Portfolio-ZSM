import React from 'react'
import Image from 'next/image';
import styles from '../styles/About.module.css'; // import CSS Module

function About() {
  return (
    <div  className={styles.container}>
      <Image src="/photodeprofil.jpg" alt="Description" width={300} height={300} className={styles.pdp}
  
  
  />
    </div>
  )
}

export default About