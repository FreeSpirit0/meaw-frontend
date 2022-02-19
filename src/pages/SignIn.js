import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthProvider';
import { login } from '../services/auth'
import { FaEnvelope, FaLock } from 'react-icons/fa'

const SignIn = () => {
  const navigate = useNavigate()
  const { setUserInfo, setToken } = useAuth() 
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const onClickSubmit = async (e) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    await login(formData).then(data=> {
      if (data) {
        setUserInfo({ username: username })
        setToken(data.access_token)
        navigate('/home')
      }
    })
  }

  return (
    <div className="sign-in-container">
      <h1>Sign in</h1>
      <div className="sign-in-info">
        <p className="email-title">Email</p>
        <form className="email-form">
          <FaEnvelope className="icons" />
          <input
            placeholder="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </form>
        <p>Password</p>
        <form className="pass-form">
          <FaLock className="icons" />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
        {/* TODO: Add onClick to submit {username, password} to Backend. */}
        <button onClick={onClickSubmit}>Sign in</button>
      </div>
    </div>
  )
}

export default SignIn
