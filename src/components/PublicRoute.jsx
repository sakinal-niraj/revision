import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  const token = localStorage.getItem('token'); 

  return token ? <Navigate to="/home" replace /> : <Outlet />;
}

export default PublicRoute;
