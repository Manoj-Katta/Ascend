import express from 'express';
import * as dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb'; // Import ObjectId
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import { signToken, authMiddleware } from './utils/auth.js'; // Import auth utilities
import connectDB from './config/connection.js';
import * as tf from '@tensorflow/tfjs';

dotenv.config();

const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mongoUrl = process.env.MONGODB_URI;

const app = express();

// Enable CORS
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
const connectMongoDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Load TensorFlow model
let model;
const loadModel = async () => {
  try {
    model = await tf.loadLayersModel('../models/Ascend/Javascript/model.json'); 
    console.log('Model loaded successfully');
  } catch (error) {
    console.error('Error loading model:', error);
  }
};

// User registration endpoint
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const db = client.db('quizDB');
    const collection = db.collection('users');

    const existingUser = await collection.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: existingUser.username === username ? 'Username already exists' : 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const result = await collection.insertOne({ username, email, password: hashedPassword });
    const token = signToken({ username, email, _id: result.insertedId });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = client.db('quizDB');
    const collection = db.collection('users');

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // Compare hashed passwords
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = signToken({ username: user.username, email: user.email, _id: user._id });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/collections', async (req, res) => {
  try {
    const db = client.db('lessons'); // Change to your database name
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(coll => coll.name);
    res.json(collectionNames);
  } catch (error) {
    console.error('Error fetching collection names:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Fetch all questions
app.get('/api/quiz/lessons/:skill', async (req, res) => {
  const skill = req.params.skill;
  //console.log(`Received request to fetch lessons for skill: ${skill}`);

  try {
    const db = client.db('lessons');
    const collection = db.collection(skill);
    const questions = await collection.find({}).toArray();

    // console.log(`Fetched ${questions.length} lessons for skill: ${skill}`);
    // console.log(questions);
    res.json(questions);
  } catch (err) {
    console.error(`Error fetching lessons for skill: ${skill}`, err);
    res.status(500).json({ message: err.message });
  }
});

// Check the answer
app.post('/api/quiz/lessons/:skill/check', async (req, res) => {
  const skill = req.params.skill;
  const { questionId, selectedOption } = req.body;

  try {
    const db = client.db('lessons');
    const collection = db.collection(skill);

    // Find the question by its ID
    const question = await collection.findOne({ _id: new ObjectId(questionId) });

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Check if the selected option matches the correct answer
    const isCorrect = question.answer === selectedOption;

    res.json({ isCorrect });
  } catch (err) {
    console.error('Error checking answer:', err);
    res.status(500).json({ message: 'Failed to check answer' });
  }
});

// Fetch rows based on number and skill
app.get('/api/getRows/:number/:skill', async (req, res) => {
  const { number, skill } = req.params;

  try {
    // console.log('Received request for number:', number, 'and skill:', skill);

    const db = client.db('Articles');
    const collection = db.collection('Javascript');

    const numericValue = parseFloat(number);
    const range = 5;

    const result = await collection.find({
      "Average Rating": { $gte: numericValue - range, $lte: numericValue + range },
      domain: skill
    }).limit(100).toArray();

    // console.log('Matching rows:', result);
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client')));
}

// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await connectMongoDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
