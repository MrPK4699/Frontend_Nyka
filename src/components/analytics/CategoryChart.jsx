// components/analytics/CategoryChart.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';

const CategoryChart = ({ data }) => {
  return (
    <Box>
      <h2>Category Chart</h2>
      <Pie data={data} />
    </Box>
  );
};

export default CategoryChart;
