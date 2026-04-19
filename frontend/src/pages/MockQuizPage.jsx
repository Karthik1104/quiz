import QuizCard from "../components/QuizCard.jsx";

const MockQuizPage = ({ quizzes }) => {
  const mockQuizzes = quizzes.filter((quiz) => quiz.category === "mock");

  return (
    <div className="page">
      <section className="section-heading">
        <p className="eyebrow">Mock Quiz Hub</p>
        <h2>Choose any mock test from Mock 1 to Mock 5</h2>
        <p>Use these placeholder mock quizzes now and replace the questions with your real sets later.</p>
      </section>

      <div className="card-grid">
        {mockQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default MockQuizPage;
