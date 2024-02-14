// App.js
import React from 'react';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';

const App = () => {
  return (<>
    {/* <h1>App</h1> */}
    <BrowserRouter>
      {/* <Switch> */}
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/analytics" element={<AnalyticsPage/>} />
      </Routes>
      {/* </Switch> */}
    </BrowserRouter>
    </>
  );
}

export default App;
