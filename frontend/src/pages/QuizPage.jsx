import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import QuestionItem from "../components/QuestionItem.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";
import {
  checkQuizAnswer,
  fetchQuizById,
  submitQuizAnswers
} from "../api/quizApi.js";

const QuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [liveChecks, setLiveChecks] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loadQuiz = async () => {
    try {
      setIsLoading(true);
      setError("");
      const data = await fetchQuizById(quizId);
      setQuiz(data);
      setAnswers({});
      setLiveChecks({});
      setCurrentQuestionIndex(0);
      setResult(null);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuiz();
  }, [quizId]);

  const currentQuestion = quiz?.questions[currentQuestionIndex];

  const reviewMap = useMemo(() => {
    if (!result) {
      return {};
    }

    return Object.fromEntries(result.review.map((item) => [item.questionId, item]));
  }, [result]);

  const handleSelectAnswer = async (questionId, option) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: option
    }));

    try {
      setError("");
      const feedback = await checkQuizAnswer(quizId, questionId, option);
      setLiveChecks((currentChecks) => ({
        ...currentChecks,
        [questionId]: feedback
      }));
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError("");
      const data = await submitQuizAnswers(quizId, answers);
      setResult(data);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setLiveChecks({});
    setCurrentQuestionIndex(0);
    setResult(null);
  };

  if (isLoading) {
    return <Loader label="Loading quiz data from the backend..." />;
  }

  if (error && !quiz) {
    return (
      <section className="error-state">
        <h2>Unable to load this quiz.</h2>
        <p>{error}</p>
        <div className="button-row">
          <button className="button" onClick={loadQuiz}>
            Try Again
          </button>
          <Link className="button button--ghost" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  if (!quiz || !currentQuestion) {
    return null;
  }

  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const activeReviewItem = result
    ? reviewMap[currentQuestion.id]
    : liveChecks[currentQuestion.id];
  const isLargeQuiz = quiz.questionCount > 30;

  return (
    <div className="page">
      <section className="quiz-header">
        <div>
          <p className="eyebrow">
            {quiz.category === "mock"
              ? "Mock Quiz"
              : quiz.category === "final"
                ? "Final Practice"
                : "Weekly Quiz"}
          </p>
          <h2>{quiz.title}</h2>
          <p>{quiz.description}</p>
        </div>
        <div className="quiz-header__stats">
          <span>{answeredCount} answered</span>
          <span>{quiz.questionCount} total</span>
        </div>
      </section>

      {error ? (
        <div className="inline-error">
          <p>{error}</p>
        </div>
      ) : null}

      <div className={`quiz-layout${isLargeQuiz ? " quiz-layout--large" : ""}`}>
        <aside className={`question-nav${isLargeQuiz ? " question-nav--compact" : ""}`}>
          <h3>Question Navigation</h3>
          <p className="question-nav__summary">
            Question {currentQuestionIndex + 1} of {quiz.questionCount}
          </p>
          <div className="question-nav__grid">
            {quiz.questions.map((question, index) => (
              <button
                key={question.id}
                className={[
                  "question-nav__button",
                  currentQuestionIndex === index ? "question-nav__button--active" : "",
                  answers[question.id] ? "question-nav__button--answered" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button className="button button--ghost" onClick={loadQuiz}>
            Refresh Quiz
          </button>
        </aside>

        <div className="quiz-main">
          <QuestionItem
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            selectedAnswer={answers[currentQuestion.id]}
            onSelectAnswer={handleSelectAnswer}
            isSubmitted={Boolean(result)}
            reviewItem={activeReviewItem}
          />

          <div className="button-row quiz-pager">
            <button
              className="button button--ghost"
              onClick={() => setCurrentQuestionIndex((index) => Math.max(index - 1, 0))}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="button button--ghost"
              onClick={() =>
                setCurrentQuestionIndex((index) =>
                  Math.min(index + 1, quiz.questions.length - 1)
                )
              }
              disabled={isLastQuestion}
            >
              Next
            </button>
          </div>

          <div className="submit-panel">
            <p>
              Submit whenever you are ready. After submission, the selected answer will use the
              highlighted right or wrong style from the earlier layout.
            </p>
            <div className="button-row submit-actions">
              <button className="button" onClick={handleSubmit} disabled={isSubmitting || !!result}>
                {isSubmitting ? "Submitting..." : "Submit Quiz"}
              </button>
              <button className="button button--ghost" onClick={handleRetry}>
                Reset Answers
              </button>
            </div>
          </div>

          <ScoreBoard result={result} onRetry={handleRetry} onRefresh={loadQuiz} />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
