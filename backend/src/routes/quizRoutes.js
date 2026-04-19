import express from "express";
import {
  checkAnswer,
  getQuizById,
  getQuizList,
  submitQuiz
} from "../services/quizService.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    data: getQuizList()
  });
});

router.get("/:id", (req, res) => {
  const quiz = getQuizById(req.params.id);

  if (!quiz) {
    return res.status(404).json({
      success: false,
      message: "Quiz not found."
    });
  }

  return res.json({
    success: true,
    data: quiz
  });
});

router.post("/:id/check-answer", (req, res) => {
  const { questionId, answer } = req.body ?? {};

  if (!questionId || typeof answer !== "string") {
    return res.status(400).json({
      success: false,
      message: "questionId and answer are required."
    });
  }

  const result = checkAnswer(req.params.id, questionId, answer);

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Quiz not found."
    });
  }

  if (result.error) {
    return res.status(404).json({
      success: false,
      message: result.error
    });
  }

  return res.json({
    success: true,
    data: result
  });
});

router.post("/:id/submit", (req, res) => {
  const answers = req.body?.answers;

  if (!answers || typeof answers !== "object") {
    return res.status(400).json({
      success: false,
      message: "A valid answers object is required."
    });
  }

  const result = submitQuiz(req.params.id, answers);

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Quiz not found."
    });
  }

  return res.json({
    success: true,
    data: result
  });
});

export default router;
