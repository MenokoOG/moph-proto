import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Store from "./pages/Store";
import Partners from "./pages/Partners";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import MemberArea from "./pages/MemberArea";
import AdminArea from "./pages/AdminArea";
import AddMember from "./pages/AddMember";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"; // Import the Login component
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* Add the login route */}
        <Route path="/member-area" element={<MemberArea />} />
        <Route
          path="/admin-area"
          element={
            <ProtectedRoute role="admin">
              <AdminArea />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-member"
          element={
            <ProtectedRoute role="admin">
              <AddMember />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
