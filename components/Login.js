import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

export default function Login({ onLogin, onClose }) {
  const [isLogin, setIsLogin] = useState(true); // true = connexion, false = inscription
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    const url = isLogin ? 'http://localhost:5000/signin' : 'http://localhost:5000/signup';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if(res.ok){
        setMessage(isLogin ? 'Connexion réussie !' : "Inscription réussie !");
        if(onLogin){
          onLogin(data.token, data.user);
          onClose(); // ferme la modal après succès
        }
      } else {
        setMessage(data.message || 'Erreur lors de la requête');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              name="username"
              type="text"
              placeholder="Nom d'utilisateur"
              value={formData.username}
              onChange={handleChange}
              required={!isLogin}
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? 'Se connecter' : "S'inscrire"}</button>
        </form>
        <p className={styles.message}>{message}</p>
        <p
          className={styles.toggleLink}
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage('');
            setFormData({ username: '', email: '', password: '' });
          }}
          style={{ cursor: 'pointer', color: '#0ff', marginTop: 15, userSelect: 'none', textAlign: 'center' }}
        >
          {isLogin ? "Pas encore de compte ? Inscris-toi" : "Déjà un compte ? Connecte-toi"}
        </p>
      </div>
    </div>
  );
}
