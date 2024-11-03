import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess('Logged in successfully!');
        // Store JWT token in localStorage
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true); // Update the logged-in state

        // Redirect to the home page after a short delay
        setTimeout(() => {
          navigate('/'); // Redirect to home
        }, 2000);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mt-4 w-full"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mt-4 w-full"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Login
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default Login;
