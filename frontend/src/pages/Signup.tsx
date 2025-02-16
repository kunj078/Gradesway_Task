import React from 'react';
import { useForm } from 'react-hook-form';
import { signupUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

interface SignupFormInputs {
  username: string;
  password: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<SignupFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      const response = await signupUser(data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (error) {
      alert('Signup failed');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Username" {...register('username', { required: true })} />
        <Input label="Password" type="password" {...register('password', { required: true })} />
        <Button label="Signup" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
