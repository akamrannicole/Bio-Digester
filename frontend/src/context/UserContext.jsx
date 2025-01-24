import React, { createContext, useState, useContext, useEffect } from "react"

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    setUser(userData)
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData))
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("user")
    }
  }

  const isLoggedIn = () => {
    return user !== null
  }

  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }))
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify({ ...user, ...newData }))
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  const contextValue = {
    user,
    login,
    logout,
    isLoggedIn,
    updateUser,
  }

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}



