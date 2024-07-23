'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

const CalendarContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .react-calendar {
    border: none;
  }

  .react-calendar__tile {
    border-radius: 5px;
  }

  .react-calendar__tile--now {
    background: #f0f0f0;
  }

  .react-calendar__tile--active {
    background: #4A148C;
    color: white;
  }
`;

const DashboardCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarContainer>
      <h3> Task Calendar</h3>
      <Calendar onChange={setDate} value={date} />
    </CalendarContainer>
  );
};

export default DashboardCalendar;