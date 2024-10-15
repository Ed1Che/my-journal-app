import React, { useState } from 'react';
import styles from '../styles/ReadJournalPage.module.css';

const mockJournalEntries = [
  { title: 'Entry 1', date: '14/10/2024', content: 'Content of entry 1' },
  { title: 'Entry 2', date: '13/10/2024', content: 'Content of entry 2' },
  { title: 'Entry 3', date: '12/10/2024', content: 'Content of entry 3' },
];

const ReadJournalPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const currentEntry = mockJournalEntries[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, mockJournalEntries.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredEntries = mockJournalEntries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.date.includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or date (DD/MM/YYYY)"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.entryContainer}>
        {filteredEntries.length > 0 ? (
          <>
            <h2>{filteredEntries[currentIndex].title}</h2>
            <p>{filteredEntries[currentIndex].date}</p>
            <div className={styles.content}>{filteredEntries[currentIndex].content}</div>
            <div className={styles.navigation}>
              <button onClick={handlePrevious} disabled={currentIndex === 0}>
                Previous
              </button>
              <button onClick={handleNext} disabled={currentIndex === filteredEntries.length - 1}>
                Next
              </button>
            </div>
          </>
        ) : (
          <p>No entries found</p>
        )}
      </div>
    </div>
  );
};

export default ReadJournalPage;
