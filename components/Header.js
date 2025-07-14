import React from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image';
import Link from 'next/link';


function Header() {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
     
    <Link href="/" className={styles.logo}>
      <Image  src="/logo.png" 
              alt="logo"
              width={220} 
              height={100} 
              className={styles.logoImage}/>
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
           <li className={styles.navItem}>
                <Link href="/">Accueil</Link>
           </li>
           <li className={styles.navItem}>
                 <Link href="/about">A Propos</Link>
           </li>
           <li className={styles.navItem}>
                
                 <Link href="#project">Projets</Link>
           </li>
           <li className={styles.navItem}>
                 <Link href="#contact">Contact</Link>
           </li>
      </ul>
      
      </nav>
      <button type="button" className={styles.buttonLogin}> 
        <span className={styles.loginText}>Connexion</span>
      </button>
      </header>
    </div>
  
  )
}

export default Header