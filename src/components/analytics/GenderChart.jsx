// components/analytics/GenderChart.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';

const GenderChart = ({ data }) => {
  return (
    <Box>
      <h2>Gender Chart</h2>
      <Pie data={data} />
    </Box>
  );
};

export default GenderChart;
