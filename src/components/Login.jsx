import React, { useState } from 'react';
import Card from './Card';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username.trim() && credentials.password.trim()) {
      onLogin(credentials.username);
    } else {
      setError('Username dan Password wajib diisi!');
    }
  };

  return (
    <Card title="Login Kuis">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            name="username"
            value={credentials.username}
            onChange={handleInput}
            placeholder="Masukkan username..."
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <div style={{ position: 'relative' }}>
            <input 
              type={showPassword ? "text" : "password"} 
              name="password"
              value={credentials.password}
              onChange={handleInput}
              placeholder="Masukkan password..."
              style={{ width: '100%', paddingRight: '2.5rem' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                padding: 0
              }}
              title={showPassword ? "Sembunyikan" : "Tampilkan"}
            >
              {showPassword ? (
                <img src="/eye.svg" alt="Sembunyikan" style={{ width: '20px', height: '20px', display: 'block' }} />
              ) : (
                <img src="/eye-off.svg" alt="Tampilkan" style={{ width: '20px', height: '20px', display: 'block' }} />
              )}
            </button>
          </div>
        </div>
        
        {error && <p className="error-msg">{error}</p>}
        
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </Card>
  );
};

export default Login;