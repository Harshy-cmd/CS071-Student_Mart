import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const [completed, setCompleted] = useState([false, false, false]);
  if (!user) return <Navigate to="/login" replace />;
  const tasks = ['Review Q3 project brief', 'Share the team update', 'Plan next week'];
  const completedCount = completed.filter(Boolean).length;

  return (
    <main className="dashboard-container page-shell">
      <div className="dashboard-header">
        <div><span className="section-kicker">YOUR WORKSPACE</span><h2>Good morning, {user.name}.</h2><p className="dashboard-intro">Here is the signal for your day.</p></div>
        <Link to="/" className="back-link">Back home <span>↗</span></Link>
      </div>
      <div className="dashboard-grid">
        <div className="stat-card stat-card-main"><span className="card-label">WEEKLY FOCUS</span><div className="value">{completedCount}/3</div><p>priority tasks completed</p><div className="progress"><span style={{ width: `${(completedCount / 3) * 100}%` }} /></div></div>
        <div className="stat-card"><span className="card-label">MOMENTUM</span><div className="value">Steady</div><p>Keep your rhythm going.</p><span className="momentum-mark">↗ +12%</span></div>
        <div className="task-panel"><div className="panel-heading"><div><span className="card-label">TODAY'S SIGNAL</span><h3>Small steps, big direction.</h3></div><span className="task-count">{completedCount} / 3</span></div>{tasks.map((task, index) => <label className={`task-row ${completed[index] ? 'done' : ''}`} key={task}><input type="checkbox" checked={completed[index]} onChange={() => setCompleted(completed.map((item, taskIndex) => taskIndex === index ? !item : item))} /><span>{task}</span><span className="task-arrow">→</span></label>)}</div>
      </div>
    </main>
  );
};

export default Dashboard;