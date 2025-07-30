import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Login from './Login'; // Import du composant Login (modal)

export default function Header() {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLoginSuccess = (token, user) => {
    setUser(user);
    setModalOpen(false);
    // tu peux stocker token en localStorage ici si tu veux
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={220} height={100} className={styles.logoImage} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/">Accueil</Link></li>
            <li className={styles.navItem}><Link href="/about">A Propos</Link></li>
            <li className={styles.navItem}><Link href="#project">Projets</Link></li>
            <li className={styles.navItem}><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>

        {!user && (
          <button className={styles.buttonLogin} onClick={() => setModalOpen(true)}>
            <span className={styles.loginText}>Connexion</span>
          </button>
        )}

        {user && <p className={styles.welcomeMessage}>Bienvenue, {user.username} !</p>}

        {modalOpen && <Login onLogin={handleLoginSuccess} onClose={() => setModalOpen(false)} />}
      </header>
    </div>
  );
}
