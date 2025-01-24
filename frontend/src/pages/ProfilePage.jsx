import React, { useState } from "react"
import { useUser } from "../context/UserContext"

const ProfilePage = () => {
  const { user, updateUser } = useUser()
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(formData)
    alert("Profile updated successfully!")
  }

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1.5rem",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      fontSize: "1rem",
      color: "#555",
    },
    input: {
      padding: "0.5rem",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "0.75rem",
      fontSize: "1rem",
      backgroundColor: "#A31621",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default ProfilePage

