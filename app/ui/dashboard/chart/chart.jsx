'use client';
import { useState } from 'react';
import styles from './chart.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalData, setModalData] = useState({ vendorName: '', tasks: [] });
  const [showModal, setShowModal] = useState(false);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDayClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    // Example data; you can replace this with your actual data fetching logic
    setModalData({
      vendorName: 'Vendor ABC',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className={styles.day} onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map(day => (
          <div key={day} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.days}>{renderDays()}</div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2>{`Tasks for ${selectedDate.toDateString()}`}</h2>
            <p><strong>Vendor:</strong> {modalData.vendorName}</p>
            <ul>
              {modalData.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            <button className={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
