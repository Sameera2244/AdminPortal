'use client';
import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import { Bar } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'chart.js/auto';

const Card = () => {
  const [date, setDate] = useState(new Date());
  const [vendorEfficiency, setVendorEfficiency] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    newClients: [9.123, 8.234, 7.345, 6.789, 5.678, 4.567, 3.456],
    recurringClients: [22.643, 21.567, 20.789, 19.234, 18.678, 17.456, 16.123],
    pageviews: [78.623, 77.456, 76.789, 75.234, 74.678, 73.456, 72.123],
    organic: [49.123, 48.567, 47.789, 46.234, 45.678, 44.456, 43.123]
  });

  // Dummy function to simulate updating vendor efficiency
  const updateVendorEfficiency = () => {
    setVendorEfficiency({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      newClients: vendorEfficiency.newClients.map(d => d + Math.random()),
      recurringClients: vendorEfficiency.recurringClients.map(d => d + Math.random()),
      pageviews: vendorEfficiency.pageviews.map(d => d + Math.random()),
      organic: vendorEfficiency.organic.map(d => d + Math.random())
    });
  };

  // Use effect to simulate data updates
  useEffect(() => {
    const interval = setInterval(updateVendorEfficiency, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const barData = {
    labels: vendorEfficiency.labels,
    datasets: [
      {
        label: 'New Clients',
        data: vendorEfficiency.newClients,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Recurring Clients',
        data: vendorEfficiency.recurringClients,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pageviews',
        data: vendorEfficiency.pageviews,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Organic',
        data: vendorEfficiency.organic,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.summary}>
        <div className={`${styles.card} ${styles.blueCard}`}>
          <h2>88.9%</h2>
          <p>SERVER UP TIME</p>
        </div>
        <div className={`${styles.card} ${styles.purpleCard}`}>
          <h2>30,982</h2>
          <p>TOTAL USERS</p>
        </div>
        <div className={`${styles.card} ${styles.lightPurpleCard}`}>
          <h2>65%</h2>
          <p>DOWNLOAD</p>
        </div>
        <div className={`${styles.card} ${styles.greenCard}`}>
          <h2>+62,870</h2>
          <p>UPLOAD</p>
        </div>
      </div>

      <div className={styles.mainContent}>
      <div className={`${styles.card} ${styles.chartCard}`}>
  <h3>Vendor Management</h3>
  <table className={styles.vendorTable}>
    <thead>
      <tr>
        <th>Vendor Name</th>
        <th>Vendor ID</th>
        <th>Task</th>
        <th>Status</th>
        <th>Order No</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vendor A</td>
        <td>V001</td>
        <td>Delivery</td>
        <td>Completed</td>
        <td>ORD1234</td>
      </tr>
      <tr>
        <td>Vendor B</td>
        <td>V002</td>
        <td>Installation</td>
        <td>Pending</td>
        <td>ORD1235</td>
      </tr>
      <tr>
        <td>Vendor C</td>
        <td>V003</td>
        <td>Maintenance</td>
        <td>In Progress</td>
        <td>ORD1236</td>
      </tr>
      <tr>
        <td>Vendor D</td>
        <td>V004</td>
        <td>Consultation</td>
        <td>Completed</td>
        <td>ORD1237</td>
      </tr>
    </tbody>
  </table>
</div>


        <div className={`${styles.card} ${styles.chartCard}`}>
          <h3>GRAPH 03</h3>
          <Bar data={barData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                  }
                }
              }
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              }
            }
          }} />
        </div>

        <div className={`${styles.card} ${styles.vendorEfficiencyCard}`}>
          <h4>Vendor Efficiency</h4>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {vendorEfficiency.labels.map((label, index) => (
                <tr key={index}>
                  <td>{label}</td>
                  <td>{vendorEfficiency.newClients[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
