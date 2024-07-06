import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: String,
  options: [{String, isCorrect: Boolean}],
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
