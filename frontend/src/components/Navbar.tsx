import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar: React.FC = () => {
  const isAuthenticated = localStorage.getItem('user') ? true : false;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout', {}, { withCredentials: true });
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link> |{' '}
      {isAuthenticated ? (
        <>
          <Link to="/create-quiz">Create Quiz</Link> |{' '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> |{' '}
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
