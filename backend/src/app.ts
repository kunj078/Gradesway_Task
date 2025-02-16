import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import quizRoutes from './routes/quizRoutes';
import sequelize from './config/db';
import './models/userModel'; // Ensure models are imported so associations are setup
import './models/quizModel';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true, // Allows session cookies to be sent
}));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);

// Sync database (for demo purposes)
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.error('Error syncing database:', err));

export default app;
