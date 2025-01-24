import React, { createContext, useState, useContext } from "react"

// Create the UserContext
const UserContext = createContext()

// Create a custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Function to log in a user
  const login = (userData) => {
    setUser(userData)
    // You might want to store the user data in localStorage or sessionStorage here
    localStorage.setItem("user", JSON.stringify(userData))
  }

  // Function to log out a user
  const logout = () => {
    setUser(null)
    // Clear the user data from localStorage or sessionStorage
    localStorage.removeItem("user")
  }

  // Function to check if a user is logged in
  const isLoggedIn = () => {
    return user !== null
  }

  // Function to update user data
  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }))
    // Update the stored user data
    localStorage.setItem("user", JSON.stringify({ ...user, ...newData }))
  }

  // Effect to check for stored user data on component mount
  React.useEffect(() => {
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

export default UserProvider

