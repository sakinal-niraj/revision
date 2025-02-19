import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from './router/Route';

function App() {
  return (
    <Routes>
      {routes?.map((item,index)=>(
        <Route key={index} path={item?.path} element={item?.element} />
      ))}
    </Routes>
  )
}

export default App;