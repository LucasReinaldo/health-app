import React, { ReactNode } from 'react';

import { Container, Box, Week } from './styles';

interface DayProps {
  day: string;
  isActive?: boolean;
  children?: ReactNode;
}

const Day = ({ day, isActive }: DayProps) => {
  return (
    <Container>
      <Box isActive={isActive}>
        <Week>{day}</Week>
      </Box>
    </Container>
  );
};

export default Day;
