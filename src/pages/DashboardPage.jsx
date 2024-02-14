// pages/Dashboard/DashboardPage.js
import React from 'react';
import AddProductModal from '../components/dashboard/AddProductModal';
import ProductTable from '../components/dashboard/ProductTable';
import EditProductModal from '../components/dashboard/EditProductModal';
import Filteration from '../components/dashboard/Filteration';
const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      {/* <Filteration/> */}
      <AddProductModal />
      <ProductTable />
      <EditProductModal />
    </div>
  );
};

export default DashboardPage;
