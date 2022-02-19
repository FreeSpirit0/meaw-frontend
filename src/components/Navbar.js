import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'

const Navbar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  return (
    <div className="navbar-container">
      <Link to="/home" style={{ textDecoration: 'none' }}>
        {/* <h1 onClick={() => navigate('/home')}>แมวเตือน</h1> */}
        <h1>แมวเตือน</h1>
      </Link>
      {window.localStorage.getItem('user') ? (
        <p>
          {JSON.parse(window.localStorage.getItem('user')).username}
          <button onClick={logout}>Logout</button>
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
