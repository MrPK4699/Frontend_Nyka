// pages/Analytics/AnalyticsPage.js
import React from 'react';
import GenderChart from '../components/analytics/GenderChart';
import CategoryChart from '../components/analytics/CategoryChart';

const AnalyticsPage = () => {
  return (
    <div>
      <h2>Analytics Page</h2>
      <GenderChart />
      <CategoryChart />
    </div>
  );
};

export default AnalyticsPage;
