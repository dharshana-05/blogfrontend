'use client';
import { useState } from 'react';

export default function UserLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'user123' && password === 'userpass') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      setTimeout(() => {
        window.location.href = '/home';
      }, 100);
    } else {
      setError('Invalid user credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">User Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
}
