import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactForm.module.css'; // import CSS Module

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4faz8d', 'template_anr2x0s', form.current, 'B3Idh0AdEs9aUYKJm')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé !");
        },
        (error) => {
          console.log(error.text);
          alert("Erreur d'envoi...");
        }
      );

    e.target.reset(); // Vide les champs
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      <h2 className={styles.title}>Contactez-moi</h2>
      <input type="text" name="user_name" placeholder="Nom" required className={styles.input} />
      <input type="email" name="user_email" placeholder="Email" required className={styles.input} />
      <textarea name="message" placeholder="Partagez vos besoins, je crée la solution !" required className={styles.textarea} />
      <button type="submit" className={styles.button}>Envoyer</button>
    </form>
  );
};

export default ContactForm;
