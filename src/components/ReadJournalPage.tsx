import React, { useState, useEffect } from 'react';
import styles from '../styles/ReadJournalPage.module.css';

const ReadJournalPage: React.FC = () => {
  const [journalEntries, setJournalEntries] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch journal entries when the component mounts
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await fetch('/api/journal');
        if (response.ok) {
          const data = await response.json();
          setJournalEntries(data);
        } else {
          console.error('Failed to fetch journal entries');
        }
      } catch (error) {
        console.error('Error fetching journal entries:', error);
      }
    };

    fetchJournals();
  }, []);

  // Fetch entries based on the search term
  useEffect(() => {
    if (searchTerm === '') {
      const fetchJournals = async () => {
        try {
          const response = await fetch('/api/journal');
          if (response.ok) {
            const data = await response.json();
            setJournalEntries(data);
          } else {
            console.error('Failed to fetch journal entries');
          }
        } catch (error) {
          console.error('Error fetching journal entries:', error);
        }
      };

      fetchJournals();
    } else {
      const searchJournals = async () => {
        try {
          const response = await fetch(`/api/journal/search?query=${searchTerm}`);
          if (response.ok) {
            const data = await response.json();
            setJournalEntries(data);
          } else {
            console.error('Failed to fetch search results');
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      searchJournals();
    }
  }, [searchTerm]);

  const currentEntry = journalEntries[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, journalEntries.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
        {journalEntries.length > 0 ? (
          <>
            <h2>{currentEntry?.title}</h2>
            <p>{currentEntry?.date}</p>
            <div className={styles.content}>{currentEntry?.content}</div>
            <div className={styles.navigation}>
              <button onClick={handlePrevious} disabled={currentIndex === 0}>
                Previous
              </button>
              <button onClick={handleNext} disabled={currentIndex === journalEntries.length - 1}>
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
