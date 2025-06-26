import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [showHello, setShowHello] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email });
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light px-3">
      {/* Page Heading */}
      <h1 className="mb-4 display-5 text-primary text-center fw-bold heading-glow">
        React Form with Toggle
      </h1>

      {/* Form Card */}
      <div className={`form-card shadow-lg p-4 rounded-4 w-100 ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">🌟 User Info</h5>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-sm btn-outline-light toggle-btn"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary w-50 rounded-3">
              🚀 Submit
            </button>
            <button
              type="button"
              className="btn btn-success w-50 rounded-3"
              onClick={() => setShowHello(!showHello)}
            >
              👋 Toggle Hello
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="mt-4 alert alert-info">
            <strong>Name:</strong> {submittedData.name}<br />
            <strong>Email:</strong> {submittedData.email}
          </div>
        )}

        {showHello && (
          <div className="mt-3 text-center fs-5 hello-message">
            💬 Hello World!
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
