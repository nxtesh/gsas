import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null); // To handle error messages
  const [success, setSuccess] = useState(null); // To handle success message
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess("Registered successfully!");
        setIsLoggedIn(true); // Set the logged-in state
        // Redirect to the home page after a short delay
        setTimeout(() => {
          navigate("/"); // Redirect to home after successful registration
        }, 2000);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred while registering");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mt-4 w-full"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mt-4 w-full"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mt-4 w-full"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Register
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default Register;
