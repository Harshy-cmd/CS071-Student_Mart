import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function Home() {
  return (
    <main className="page-shell home-page">
      <section className="hero-container">
        <div className="eyebrow"><span className="eyebrow-dot" /> Your work, in focus</div>
        <h1 className="hero-title">A calmer way to<br /><em>move work forward.</em></h1>
        <p className="hero-subtitle">Northstar brings your team, tasks, and momentum into one clear workspace built for meaningful progress.</p>
        <div className="hero-actions">
          <Link to="/register" className="btn-primary">Start for free <span>↗</span></Link>
          <Link to="/dashboard" className="text-link">Explore the dashboard <span>→</span></Link>
        </div>
        <div className="hero-note"><span>✦</span> No credit card required <span>·</span> Set up in 2 minutes</div>
      </section>
      <section className="feature-strip" aria-label="Product highlights">
        <div className="feature-intro"><span className="section-kicker">THE NORTHSTAR METHOD</span><h2>Less noise.<br />More north.</h2></div>
        <div className="feature-item"><span className="feature-number">01</span><h3>See the signal</h3><p>Keep priorities visible and make the next step obvious.</p></div>
        <div className="feature-item"><span className="feature-number">02</span><h3>Move together</h3><p>Give every project a shared home your team can trust.</p></div>
        <div className="feature-item"><span className="feature-number">03</span><h3>Know your pace</h3><p>Turn progress into a rhythm instead of another report.</p></div>
      </section>
    </main>
  );
}

function Navigation({ user, onLogout }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = user ? [{ path: '/dashboard', label: 'Workspace' }] : [{ path: '/login', label: 'Sign in' }];
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}><span>✦</span> northstar</Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <Link className={location.pathname === '/' ? 'active' : ''} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        {links.map((link) => <Link key={link.path} className={location.pathname === link.path ? 'active' : ''} to={link.path} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
        {user ? <button className="nav-logout" onClick={onLogout}>Sign out</button> : <Link className="nav-cta" to="/register" onClick={() => setMenuOpen(false)}>Join Northstar <span>↗</span></Link>}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('northstar-user') || 'null'));
  const handleLogin = (account) => { localStorage.setItem('northstar-user', JSON.stringify(account)); setUser(account); };
  const handleLogout = () => { localStorage.removeItem('northstar-user'); setUser(null); };
  return <div className="app-frame"><Navigation user={user} onLogout={handleLogout} /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login onLogin={handleLogin} />} />
    <Route path="/register" element={<Register onRegister={handleLogin} />} />
    <Route path="/dashboard" element={<Dashboard user={user} />} />
  </Routes><footer><span>✦ northstar</span><span>Built for better days at work.</span><span>© 2025 Northstar</span></footer></div>;
}

export default App;