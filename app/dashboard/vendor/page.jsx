"use client"
import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

const Page = () => {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  useEffect(() => {
    if (startDateRef.current) {
      new Pikaday({
        field: startDateRef.current,
        format: 'DD-MM-YYYY',
      });
    }
    if (endDateRef.current) {
      new Pikaday({
        field: endDateRef.current,
        format: 'DD-MM-YYYY',
      });
    }
  }, []);

  const generateReport = () => {
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;

    if (!startDate || !endDate) {
      alert('Please select both start and end dates');
      return;
    }

    // Convert dates to desired format or fetch data between these dates
    // Example logic for generating report data
    console.log(`Generating report from ${startDate} to ${endDate}`);

    // Replace the following with actual data fetching logic
    const data = `Report from ${startDate} to ${endDate}`;

    // Create a Blob from the data
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `report_${startDate}_to_${endDate}.txt`;

    // Programmatically click the link to trigger the download
    link.click();
  };

  return (
    <div className="container">
      <label htmlFor="start-date">Start Date</label>
      <input
        type="text"
        id="start-date"
        placeholder="dd-mm-yyyy"
        ref={startDateRef}
      />
      <label htmlFor="end-date">End Date</label>
      <input
        type="text"
        id="end-date"
        placeholder="dd-mm-yyyy"
        ref={endDateRef}
      />
      <button onClick={generateReport}>Generate Report</button>
      <style jsx>{`
        .container {
          display: flex;
          align-items: flex-end;
          color:black;
          gap: 10px;
        }

        input[type="text"] {
          width: 150px;
          padding: 5px;
          color:black;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          background-color: #00a7e1;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #007bb3;
        }
      `}</style>
    </div>
  );
};

export default Page;

