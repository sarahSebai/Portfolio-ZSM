import React, { useState } from 'react';
import styles from '../styles/Project.module.css';

function Project() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = (src) => {
    setVideoSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoSrc('');
  };

  return (
    <div className={styles.projectGrid}>
      {/* Miniature 1 */}
      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1745957260/weatherapp_demo_rf7vr0.mp4")}>
        <img src="/weatherapp.png" alt="Weather App" className={styles.imagePreview} />
        <p>Clique pour découvrir le projet</p>
      </div>

      {/* Miniature 2 */}
      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1746181150/Vid%C3%A9o_sans_titre_R%C3%A9alis%C3%A9e_avec_Clipchamp_gofvod.mp4")}>
        <img src="/tickethack.png" alt="Second Project" className={styles.imagePreview} />
        <p>Clique pour découvrir le  projet</p>
      </div>

      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1746187329/Vid%C3%A9o_sans_titre_R%C3%A9alis%C3%A9e_avec_Clipchamp_1_cefhba.mp4")}>
        <img src="/giveachance.png" alt="third Project" className={styles.imagePreview} />
        <p>Clique pour découvrir le projet</p>
      </div>

      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1746188535/mymails_demo_s45afz.mp4")}>
        <img src="/mymails.png" alt="third Project" className={styles.imagePreview} />
        <p>Clique pour découvrir le projet</p>
      </div>

      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1746536074/Screenity_video_-_May_6_2025_ghayjm.mkv")}>
        <img src="/mymovies.png" alt="third Project" className={styles.imagePreview} />
        <p>Clique pour découvrir le projet</p>
      </div>
      
      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1746544720/Vid%C3%A9o_sans_titre_R%C3%A9alis%C3%A9e_avec_Clipchamp_2_fuelb4.mp4")}>
        <img src="/logotwi.png" alt="third Project" className={styles.imagePreview} />
        <p>Clique pour découvrir le projet</p>
      </div>
      
      <div className={styles.blockimage} onClick={() => openModal("https://res.cloudinary.com/dalpsshcu/video/upload/v1746784353/musicstore_ty0tpe.mp4")}>
        <img src="/musicstore.png" alt="third Project" className={styles.imagePreview} />
        <p>Clique pour découvrir le projet</p>
      </div>
      
     


      {/* Modale avec vidéo */}
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={closeModal}>✖</button>
            <video controls autoPlay className={styles.video}>
              <source src={videoSrc} type="video/mp4" />
              Ton navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;