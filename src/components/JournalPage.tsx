import React, { useState } from 'react';
import styles from '../styles/JournalPage.module.css';

const JournalPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const currentDate = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY format

  const handleSaveJournal = async () => {
    const entry = {
      title: title,
      content: content,
      date: currentDate
    };

    try {
      const response = await fetch('/api/journal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (response.ok) {
        alert('Journal entry saved successfully!');
        setTitle('');
        setContent('');
      } else {
        alert('Failed to save journal entry.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the journal entry.');
    }
  };

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
          value={content}
          onChange={handleContentChange}
          placeholder="Write your journal entry here..."
          className={styles.textArea}
        />
        <button onClick={handleSaveJournal} className={styles.saveButton}>
          Save Journal
        </button>
      </div>
    </div>
  );
};

export default JournalPage;
