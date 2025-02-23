import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, Register } from "../Pages";
import Profile from "../Pages/Profile";
import Course from "../Pages/Course";
import Leasons from "../Pages/Leasons";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Course" element={<Course />} />          
          <Route path="/Leasons" element={<Leasons />} />
        </Routes>
      </Router>
    </div>
  );
};

export { AppRouter };
