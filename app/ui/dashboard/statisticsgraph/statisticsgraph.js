import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 120 },
  { name: 'Mar', value: 140 },
  { name: 'Apr', value: 130 },
  { name: 'May', value: 150 },
  { name: 'Jun', value: 170 },
  { name: 'Jul', value: 160 },
  { name: 'Aug', value: 180 },
  { name: 'Sep', value: 200 },
  { name: 'Oct', value: 210 },
  { name: 'Nov', value: 220 },
  { name: 'Dec', value: 230 },
];

const ChartContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StatisticsGraph = () => {
  return (
    <ChartContainer>
      <h3>Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#ff7300" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StatisticsGraph;
