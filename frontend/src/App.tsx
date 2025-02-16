import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateQuiz from './pages/CreateQuiz';
import EditQuiz from './pages/EditQuiz';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  // For simplicity, authentication is checked via localStorage.
  const isAuthenticated = localStorage.getItem('user') ? true : false;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} />
        <Route path="/create-quiz" element={isAuthenticated ? <CreateQuiz /> : <Navigate to="/login" />} />
        <Route path="/edit-quiz/:id" element={isAuthenticated ? <EditQuiz /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
