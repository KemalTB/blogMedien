import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public route for register */}
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route path="/blog" element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;



