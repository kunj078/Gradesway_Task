import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../api/quiz';
import { Link } from 'react-router-dom';

interface Quiz {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    try {
      const response = await getQuizzes();
      setQuizzes(response.data.quizzes);
    } catch (error) {
      console.error('Error fetching quizzes', error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/quizzes/${id}`, { method: 'DELETE', credentials: 'include' });
      fetchQuizzes();
    } catch (error) {
      console.error('Error deleting quiz', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Quizzes</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
          <p>Created At: {new Date(quiz.createdAt).toLocaleString()}</p>
          <Link to={`/edit-quiz/${quiz.id}`} style={{ marginRight: '10px' }}>Edit</Link>
          <button onClick={() => handleDelete(quiz.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
