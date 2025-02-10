import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Login } from "../pages";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export { AppRouter };
