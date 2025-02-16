// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';

const saltRounds = 10;

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ username, password: hashedPassword });
    
    // Now TypeScript knows req.session.user exists.
    req.session.user = { id: newUser.id, username: newUser.username };

    res.status(201).json({ message: 'Signup successful', user: { id: newUser.id, username: newUser.username } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    req.session.user = { id: user.id, username: user.username };

    res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logout successful' });
  });
};
