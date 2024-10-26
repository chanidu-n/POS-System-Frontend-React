import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ItemPage from './pages/ItemPage';
import CategoryPage from './pages/CategoryPage';
import StockPage from './pages/StockPage';     // Make sure StockPage is correctly imported
import POSPage from './pages/POSPage';         // Correct import for POSPage
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          <Route path="/items" element={<PrivateRoute component={ItemPage} />} />
          <Route path="/categories" element={<PrivateRoute component={CategoryPage} />} />
          <Route path="/stock" element={<PrivateRoute component={StockPage} />} />
          <Route path="/pos" element={<PrivateRoute component={POSPage} />} />   {/* Correct the route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
