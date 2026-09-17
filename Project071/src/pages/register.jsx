import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name: formData.username, email: formData.email });
    navigate('/dashboard');
  };

  return (
    <main className="auth-wrapper">
      <div className="auth-card">
      <span className="section-kicker">START YOUR NORTHSTAR</span>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" id="username" name="username" 
              value={formData.username} onChange={handleChange} 
              placeholder="johndoe" required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" id="email" name="email" 
              value={formData.email} onChange={handleChange} 
              placeholder="you@example.com" required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" id="password" name="password" 
              value={formData.password} onChange={handleChange} 
              placeholder="Create a password" required 
            />
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </main>
  );
};

export default Register;