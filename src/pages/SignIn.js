import React, { useState } from "react"
import { FaEnvelope, FaLock } from "react-icons/fa"

const SignIn = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const onClickSubmit = (e) => {
    console.log("Authenticating!!")
  }

  return (
    <div className="sign-in-container">
      <h2>Sign in</h2>
      <div className="sign-in-info">
        <p>Email</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
        ></input>
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        {/* TODO: Add onClick to submit {username, password} to Backend. */}
        <button onClick={onClickSubmit}>Sign in</button>
      </div>
    </div>
  )
}

export default SignIn
