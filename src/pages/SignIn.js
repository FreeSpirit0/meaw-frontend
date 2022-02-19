import React, { useState } from "react"
import { FaEnvelope, FaLock } from "react-icons/fa"
//import cat from "./cat.png"
const SignIn = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const onClickSubmit = (e) => {
    console.log("Authenticating!!")
  }

  return (
    <div className="sign-in-container">
      {/* <img src={cat} className="catsign" /> /} */}
      <div id="gato"></div>
      <div className="sign-in-info">
        <h1>Sign in</h1>
        <p className="email-title">Email</p>
        <form className="email-form">
          <FaEnvelope className="icons" />
          <input
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </form>
        <p>Password</p>
        <form className="pass-form">
          <FaLock className="icons" />
          <input
            placeholder="Password"
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
