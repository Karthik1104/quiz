import { quizzes } from "../data/quizzes.js";

const shuffleArray = (items) => {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
};

const stripAnswerKey = (quiz) => ({
  id: quiz.id,
  title: quiz.title,
  category: quiz.category,
  description: quiz.description,
  questionCount: quiz.questionCount,
  questions: quiz.questions.map(({ correctAnswer, ...question }) => question)
});

const stripAnswerKeyWithRandomizedOrder = (quiz) => ({
  id: quiz.id,
  title: quiz.title,
  category: quiz.category,
  description: quiz.description,
  questionCount: quiz.questionCount,
  questions: shuffleArray(quiz.questions).map(({ correctAnswer, ...question }) => ({
    ...question,
    options: shuffleArray(question.options)
  }))
});

export const getQuizList = () =>
  quizzes.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    category: quiz.category,
    description: quiz.description,
    questionCount: quiz.questionCount
  }));

export const getQuizById = (id) => {
  const quiz = quizzes.find((item) => item.id === id);
  if (!quiz) {
    return null;
  }

  return quiz.category === "week" || quiz.id === "finalpractice"
    ? stripAnswerKeyWithRandomizedOrder(quiz)
    : stripAnswerKey(quiz);
};

export const checkAnswer = (id, questionId, answer) => {
  const quiz = quizzes.find((item) => item.id === id);

  if (!quiz) {
    return null;
  }

  const question = quiz.questions.find((item) => item.id === questionId);

  if (!question) {
    return { error: "Question not found." };
  }

  return {
    questionId: question.id,
    selectedAnswer: answer,
    correctAnswer: question.correctAnswer,
    isCorrect: answer === question.correctAnswer
  };
};

export const submitQuiz = (id, answers = {}) => {
  const quiz = quizzes.find((item) => item.id === id);

  if (!quiz) {
    return null;
  }

  const review = quiz.questions.map((question) => {
    const selectedAnswer = answers[question.id] ?? null;
    const isCorrect = selectedAnswer === question.correctAnswer;

    return {
      questionId: question.id,
      question: question.question,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect
    };
  });

  const correctAnswers = review.filter((item) => item.isCorrect).length;
  const wrongAnswers = review.length - correctAnswers;

  return {
    quizId: quiz.id,
    quizTitle: quiz.title,
    totalQuestions: review.length,
    correctAnswers,
    wrongAnswers,
    score: correctAnswers,
    percentage: Number(((correctAnswers / review.length) * 100).toFixed(2)),
    review
  };
};
