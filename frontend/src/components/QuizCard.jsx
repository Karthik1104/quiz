import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => (
  <article className="card">
    <div className="card__meta">
      <span>{quiz.category === "mock" ? "Mock Test" : "Weekly Quiz"}</span>
      <span>{quiz.questionCount} Questions</span>
    </div>
    <h3>{quiz.title}</h3>
    <p>{quiz.description}</p>
    <Link className="button button--ghost" to={`/quiz/${quiz.id}`}>
      Start Quiz
    </Link>
  </article>
);

export default QuizCard;
