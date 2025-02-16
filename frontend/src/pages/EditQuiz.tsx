import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateQuiz, getQuizById } from '../api/quiz';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

interface QuizFormInputs {
  title: string;
  description: string;
}

const EditQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, reset } = useForm<QuizFormInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuizById(id!);
        reset({
          title: response.data.quiz.title,
          description: response.data.quiz.description,
        });
      } catch (error) {
        console.error('Error fetching quiz', error);
      }
    };

    fetchQuiz();
  }, [id, reset]);

  const onSubmit = async (data: QuizFormInputs) => {
    try {
      await updateQuiz(id!, data);
      navigate('/');
    } catch (error) {
      alert('Failed to update quiz');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Edit Quiz</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Title" {...register('title', { required: true })} />
        <div style={{ margin: '10px 0' }}>
          <label>
            Description
            <textarea {...register('description', { required: true })} style={{ width: '100%', height: '100px', padding: '8px' }} />
          </label>
        </div>
        <Button label="Update Quiz" type="submit" />
      </form>
    </div>
  );
};

export default EditQuiz;
