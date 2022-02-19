import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div className="navbar-container">
      <h1 onClick={() => navigate("/home")}>แมวเตือน</h1>
      {window.localStorage.getItem("user") ? (
        <p>
          {JSON.parse(window.localStorage.getItem("user")).username}
          <button onClick={logout}>Logout</button>
        </p>
      ) : (
        <Link to="/signin">เข้าสู่ระบบ</Link>
      )}
    </div>
  );
};

export default Navbar;
