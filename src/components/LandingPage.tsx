import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleJournalingClick = () => {
    navigate('/journal');
  };

  const handleReadJournalClick = () => {
    navigate('/read-journal');
  };

  return (
    <div className={styles.background}> 
      <div className={styles.container}>
        <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>My Journal</h1>
              <p className={styles.subtitle}>Self-Discovery Journal</p>
              <button onClick={handleJournalingClick} className={styles.button}>
                Start Journaling
              </button>
              <button onClick={handleReadJournalClick} className={styles.button}>
                Read Journal
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
