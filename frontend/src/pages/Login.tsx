import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data, { withCredentials: true });
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      }
    } catch (error) {
      alert('Login failed');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Username" {...register('username', { required: true })} />
        <Input label="Password" type="password" {...register('password', { required: true })} />
        <Button label="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
