import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>แมวเตือน</h1>
      {/* TODO: Get user authenticated state and display accordingly */}
      <Link to="/signin" style={{ textDecoration: "none" }}>
        เข้าสู่ระบบ
      </Link>
    </div>
  )
}

export default Navbar
