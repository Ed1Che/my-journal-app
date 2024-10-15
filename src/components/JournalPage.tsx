import React, { useState } from 'react';
import styles from '../styles/JournalPage.module.css';

const JournalPage: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const currentDate = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY format

  return (
    <div className={styles.container}>
      <div className={styles.journalHeader}>
        <h1>Journal</h1>
        <p>Date: {currentDate}</p>
      </div>
      <div className={styles.entryContainer}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
          className={styles.titleInput}
        />
        <textarea
          placeholder="Write your journal entry here..."
          className={styles.textArea}
        />
      </div>
    </div>
  );
};

export default JournalPage;
