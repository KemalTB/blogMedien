import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import BlogDetail from '../pages/BlogDetail';

// Auth context oluştur
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcı durumunu burada yönet

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Korunan rotalar */}
          <Route path="/blog" element={<PrivateRouter />}>
            <Route index element={<BlogDetail />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default AppRouter;




