import { Request, Response } from 'express';
import Quiz from '../models/quizModel';

export const createQuiz = async (req: Request, res: Response) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, description } = req.body;
    const teacherId = req.session.user.id;
    const quiz = await Quiz.create({ title, description, teacherId });
    res.status(201).json({ message: 'Quiz created', quiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const teacherId = req.session.user.id;
    const quizzes = await Quiz.findAll({ where: { teacherId } });
    res.status(200).json({ quizzes });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getQuizById = async (req: Request, res: Response) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { id } = req.params;
    const teacherId = req.session.user.id;
    const quiz = await Quiz.findOne({ where: { id, teacherId } });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateQuiz = async (req: Request, res: Response) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { id } = req.params;
    const { title, description } = req.body;
    const teacherId = req.session.user.id;
    const quiz = await Quiz.findOne({ where: { id, teacherId } });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    quiz.title = title;
    quiz.description = description;
    await quiz.save();
    res.status(200).json({ message: 'Quiz updated', quiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { id } = req.params;
    const teacherId = req.session.user.id;
    const quiz = await Quiz.findOne({ where: { id, teacherId } });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    await quiz.destroy();
    res.status(200).json({ message: 'Quiz deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
