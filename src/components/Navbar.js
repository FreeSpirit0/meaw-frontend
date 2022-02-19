import React from 'react'
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  return (
      <div className="navbar-container">
        <h2 onClick={() => navigate("/home")}>แมวเตือน</h2>
        {/* TODO: Get user authenticated state and display accordingly */}
        <Link to="/signin">ลงชื่อเข้าใช้งาน</Link>
    </div>
  )
}

export default Navbar