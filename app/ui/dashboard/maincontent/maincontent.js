import React from 'react';
import styled from 'styled-components';
import DashboardCard from '@/app/ui/dashboard/dashboardcard/dashboardcard';
import DashboardCalendar from '@/app/ui/dashboard/calender/calender';
import StatisticsGraph from '@/app/ui/dashboard/statisticsgraph/statisticsgraph';

const MainContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background: #f0f0f0;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <DashboardCard title="Admin Portal" content="Edit Admin Details" />
      <StatisticsGraph />
      <DashboardCard title="Tasks" content="Task Details">
        <Table>
          <thead>
            <tr>
              <TableHeader>Name of the Vendor</TableHeader>
              <TableHeader>Task</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Vendor A</TableCell>
              <TableCell>Task 1</TableCell>
              <TableCell>Completed</TableCell>
            </tr>
            <tr>
              <TableCell>Vendor B</TableCell>
              <TableCell>Task 2</TableCell>
              <TableCell>In Progress</TableCell>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </DashboardCard>
      <DashboardCard title="Yearly Sale" content="Yearly Sale Details" />
      <DashboardCalendar />
    </MainContentContainer>
  );
};

export default MainContent;