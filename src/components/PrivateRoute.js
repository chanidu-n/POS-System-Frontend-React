import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth(); // Get authentication status from context

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
