const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  quesid: {
    type: String,
  },
  text: {
    type: String,
  },
  optionA: {
    type: String,
  },
  optionB: {
    type: String,
  },
  optionC: {
    type: String,
  },
  optionD: {
    type: String,
  },
  correctAns: {
    type: String,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
// kZCiC9jPOtGR3NbQoGyCcctRw7xDyx6VKhLAtPN0
// https://quizapi.io/api/v1/questions?apiKey=kZCiC9jPOtGR3NbQoGyCcctRw7xDyx6VKhLAtPN0&category=uncategorized&difficulty=Easy&limit=10&tags=BASH,HTML,JavaScript,Kubernetes,Linux
