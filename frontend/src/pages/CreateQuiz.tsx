import React from 'react';
import { useForm } from 'react-hook-form';
import { createQuiz } from '../api/quiz';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

interface QuizFormInputs {
  title: string;
  description: string;
}

const CreateQuiz: React.FC = () => {
  const { register, handleSubmit } = useForm<QuizFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: QuizFormInputs) => {
    try {
      await createQuiz(data);
      navigate('/');
    } catch (error) {
      alert('Failed to create quiz');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Title" {...register('title', { required: true })} />
        <div style={{ margin: '10px 0' }}>
          <label>
            Description
            <textarea {...register('description', { required: true })} style={{ width: '100%', height: '100px', padding: '8px' }} />
          </label>
        </div>
        <Button label="Create Quiz" type="submit" />
      </form>
    </div>
  );
};

export default CreateQuiz;
