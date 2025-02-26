import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './router/Route';
import SideBar from './components/SideBar';
import Loader from './components/Loder';
import './assets/style/signup.scss';
import './index.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './view/user/Login.jsx';
import Signup from './view/user/Signup.jsx';
import PublicRoute from './components/PublicRoute.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // dispatch(fetchLocation());

    return () => clearTimeout(timer);
    // }, [dispatch]);
  }, []);


  return (
    <div className="main-container">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <>
          {location.pathname === '/signup' || location.pathname === '/login' ? '' : <SideBar />}
          <div className="content">
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Route>
              <Route element={<PrivateRoute />} >
                <Route path="/home" element={<Navigate to="/" replace />} />
                {routes?.map((item, index) => (
                  <Route key={index} path={item?.path} element={item?.element} />
                ))}
              </Route>
            </Routes>
          </div>
        </>
      )}

    </div>
  );
}

export default App;
