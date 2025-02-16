import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import User from './userModel';

interface QuizAttributes {
  id: number;
  title: string;
  description: string;
  teacherId: number;
  createdAt: Date;
}

interface QuizCreationAttributes extends Optional<QuizAttributes, 'id' | 'createdAt'> {}

class Quiz extends Model<QuizAttributes, QuizCreationAttributes> implements QuizAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public teacherId!: number;
  public createdAt!: Date;
}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    tableName: 'quizzes',
    timestamps: false,
  }
);

// Set up association: One teacher (User) has many quizzes.
User.hasMany(Quiz, { foreignKey: 'teacherId' });
Quiz.belongsTo(User, { foreignKey: 'teacherId' });

export default Quiz;
