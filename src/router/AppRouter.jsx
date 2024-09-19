import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public route for register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />

        {/* Protected routes */}
        <Route path="/blog" element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;



