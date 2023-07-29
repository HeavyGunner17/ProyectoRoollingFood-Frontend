import React, { useContext } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';



const RootRouter = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       
        
        <Route path="/login" component={<Login />} />
        <Route path="/admin" component={<AdminPanel />} />
         {/*<Route path="/products" component={<Products />} /> /*}
        {/*<Route component={NotFound} /> /*}
        {/*  <Route path="/login" element={<LoginScreen />} /> */}

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
