const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const authController = require('../controllers/authController');

// router.use(authController.protect);
router.post('/quiz', quizController.submitQuiz);
router.get('/quiz', quizController.getQuiz);

module.exports = router;
