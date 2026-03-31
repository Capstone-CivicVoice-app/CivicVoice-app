import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import MainApp from "./components/MainApp.jsx";
import { useState } from "react";
import Register from "./components/Register.jsx";
import ProtectRoute from "./components/ProtectRoute.jsx";

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/*" element={<ProtectRoute><MainApp /></ProtectRoute>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
