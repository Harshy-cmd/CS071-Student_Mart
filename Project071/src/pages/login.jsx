import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: formData.email.split('@')[0], email: formData.email });
    navigate('/dashboard');
  };

  return (
    <main className="auth-wrapper">
      <div className="auth-card">
        <span className="section-kicker">WELCOME BACK</span>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Your password" required 
            />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        <p className="auth-switch">New to Northstar? <Link to="/register">Create an account</Link></p>
      </div>
    </main>
  );
};

export default Login;