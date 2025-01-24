import React, { createContext, useState, useContext, useEffect } from "react"

// Create and export the UserContext
export const UserContext = createContext()

// Create a custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

// Create and export the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Function to log in a user
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  // Function to log out a user
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  // Function to check if a user is logged in
  const isLoggedIn = () => {
    return user !== null
  }

  // Function to update user data
  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }))
    localStorage.setItem("user", JSON.stringify({ ...user, ...newData }))
  }

  // Effect to check for stored user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Create the context value object
  const contextValue = {
    user,
    login,
    logout,
    isLoggedIn,
    updateUser,
  }

  // Provide the context value to children components
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}



