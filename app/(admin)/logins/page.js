'use client';
import { useState } from 'react';

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminId === 'admin123' && password === 'adminpass') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      setTimeout(() => {
        window.location.href = '/homes'; 
      }, 100);
    } else {
      setError('Invalid admin credentials');
    }
  };
 return (
  <div className="admin-login-container">
    <h2>Admin Login</h2>
    <form onSubmit={handleAdminLogin}>
      <input
        type="text"
        placeholder="Admin ID"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  </div>
);
}