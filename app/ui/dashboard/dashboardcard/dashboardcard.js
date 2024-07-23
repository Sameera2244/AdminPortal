import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const DashboardCard = ({ title, content, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        {content}
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default DashboardCard;