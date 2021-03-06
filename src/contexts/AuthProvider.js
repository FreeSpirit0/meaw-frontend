import React, { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const setUserInfo = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate("/home")
  }

  const setToken = (token) => {
      localStorage.setItem("token", token)
      navigate("/home")
  }

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser({})
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, setUserInfo, logout, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider