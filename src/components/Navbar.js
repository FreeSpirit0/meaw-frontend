import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar-container">
        <h2>Navbar</h2>
        {/* TODO: Get user authenticated state and display accordingly */}
        <Link to="/signin">ลงชื่อเข้าใช้งาน</Link>
    </div>
  )
}

export default Navbar