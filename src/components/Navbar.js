import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'
import { BiLogOut, BiLogIn } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
const Navbar = () => {
  const { logout } = useAuth()
  return (
    <div className="navbar-container">
      <Link to="/home" style={{ textDecoration: 'none' }}>
        {/* <h1 onClick={() => navigate('/home')}>แมวเตือน</h1> */}
        <h1>แมวเตือน</h1>
      </Link>
      {window.localStorage.getItem('user') ? (
        <p className="navbar-icon">
          <BsFillPersonFill />
          &nbsp; User:&nbsp;
          {JSON.parse(window.localStorage.getItem('user')).username}
          &nbsp;&nbsp;
          {/* <BiLogOut className="logout-icon" /> */}
          <button onClick={logout} className="btn-logout">
            Logout
          </button>
        </p>
      ) : (
        <Link
          to="/signin"
          style={{ textDecoration: 'none', marginRight: '1.2rem' }}
        >
          Sign In
        </Link>
      )}
    </div>
  )
}

export default Navbar
