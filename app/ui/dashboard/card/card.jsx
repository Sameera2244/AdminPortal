'use client'
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: space-around;
  margin: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  flex: 1;
  min-width: 300px;

  &.large {
    width: 600px; /* Adjust the width as needed */
  }
`;

const CardHeader = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
  text-align: center;
`;

const CalendarContainer = styled.div`
  .react-calendar {
    background-color: #fcf6f6;
    color: #050505;
    width: 100%;
    border: none;
    font-family: 'Arial, Helvetica, sans-serif';
  }

  .react-calendar__tile--now {
    background: #f0f0f0;
  }

  .react-calendar__tile--active {
    background: #4A148C;
    color: white;
  }
`;

const DetailsCard = styled.div`
  background-color: #fff;
  color: #333;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DataCard = styled.div`
  background-color: #fff;
  color: #333;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const DataTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const DataTableCell = styled.td`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const TableContainer = styled.div`
  background-color: #333;
  color: #fff;
  margin-top: 20px;
`;

const Table = styled.table`
  background-color: #fff;
  color: #333;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #fff;
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  background-color: #fff;
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
`;

const ChartContainer = styled.div`
  position: relative;
  height: 400px;
  animation: fadeIn 2s ease-in-out;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const EfficiencyMetric = styled.div`
  background: #4a148c;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;

  h4 {
    margin: 0;
    font-size: 1.2em;
  }
`;

const AnalyticsCard = ({ children }) => {
  return <Card>{children}</Card>;
};

const AnalyticsChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(98, 90, 205, 0.2)',  // Use lighter color for background
        borderColor: 'rgba(98, 90, 205, 1)',      // Use darker color for border
        borderWidth: 2,
        barThickness: 30,  // Adjust the thickness of bars
        borderRadius: 5,   // Rounded corners
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333', // Change legend color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#333', // Change x-axis label color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#ddd', // Change y-axis grid line color
        },
        ticks: {
          color: '#333', // Change y-axis label color
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current.chartInstance;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} options={options} />;
};

const TaskTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name of Vendor</TableHeader>
            <TableHeader>Task</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>John Doe</TableCell>
            <TableCell>Complete project</TableCell>
            <TableCell>In Progress</TableCell>
          </tr>
          <tr>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Review code</TableCell>
            <TableCell>Completed</TableCell>
          </tr>
          <tr>
            <TableCell>Emily Johnson</TableCell>
            <TableCell>Update documentation</TableCell>
            <TableCell>Pending</TableCell>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};

const CardComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <CardContainer>
      <Card>
        <CardHeader>Calendar</CardHeader>
        <CalendarContainer>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </CalendarContainer>
        <DetailsCard>
          <h4>Tasks for {selectedDate.toDateString()}</h4>
          <p>Task: Complete project</p>
          <p>Person: John Doe</p>
        </DetailsCard>
      </Card>
      <Card>
        <CardHeader>Data</CardHeader>
        <TaskTable />
      </Card>
      <Card className="large">
        <CardHeader>Vendor Information</CardHeader>
        <DataCard>
          <DataTable>
            <thead>
              <DataTableRow>
                <DataTableCell><strong>Order Number</strong></DataTableCell>
                <DataTableCell><strong>Vendor Name</strong></DataTableCell>
                <DataTableCell><strong>Vendor Id</strong></DataTableCell>
                <DataTableCell><strong>Status</strong></DataTableCell>
              </DataTableRow>
            </thead>
            <tbody>
              <DataTableRow>
                <DataTableCell>12345</DataTableCell>
                <DataTableCell>Acme Corp</DataTableCell>
                <DataTableCell>67890</DataTableCell>
                <DataTableCell>Active</DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell>67891</DataTableCell>
                <DataTableCell>Globex Inc</DataTableCell>
                <DataTableCell>67892</DataTableCell>
                <DataTableCell>Pending</DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell>67893</DataTableCell>
                <DataTableCell>Initech</DataTableCell>
                <DataTableCell>67894</DataTableCell>
                <DataTableCell>Inactive</DataTableCell>
              </DataTableRow>
            </tbody>
          </DataTable>
        </DataCard>
      </Card>
      <Card>
        <CardHeader>Analytics</CardHeader>
        <ChartContainer>
          <AnalyticsChart />
          <EfficiencyMetric>
            <h4>Vendor Efficiency</h4>
            <p>Overall Efficiency: 85%</p>
          </EfficiencyMetric>
        </ChartContainer>
      </Card>
    </CardContainer>
  );
};

export default CardComponent;
