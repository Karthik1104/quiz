import QuizCard from "../components/QuizCard.jsx";
import QuizTabs from "../components/QuizTabs.jsx";

const HomePage = ({ quizzes }) => {
  const weekQuizzes = quizzes.filter((quiz) => quiz.category === "week");
  const finalPracticeQuiz = quizzes.find((quiz) => quiz.category === "final");

  return (
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Weekly Practice + Mock Tests</p>
          <h2>Prepare for NPTEL week by week with a simple full-stack quiz workflow.</h2>
          <p>
            Browse all 12 week quizzes, open the mock test section, submit answers to the backend,
            and review your score summary instantly.
          </p>
        </div>
        <div className="hero__panel">
          <h3>What&apos;s ready now</h3>
          <ul>
            <li>12 weekly quizzes with your loaded question sets</li>
            <li>A final practice quiz combining Week 1 to Week 12</li>
            <li>Mock quizzes and backend scoring APIs ready for continued updates</li>
          </ul>
        </div>
      </section>

      <QuizTabs quizzes={quizzes} />

      {finalPracticeQuiz ? (
        <section className="grid-section">
          <div className="section-heading">
            <h2>Final Practice</h2>
            <p>
              Take one combined practice quiz with randomized question order and shuffled options.
            </p>
          </div>
          <div className="card-grid">
            <QuizCard quiz={finalPracticeQuiz} />
          </div>
        </section>
      ) : null}

      <section className="grid-section">
        <div className="section-heading">
          <h2>Week-by-Week Quiz Dashboard</h2>
          <p>Open any week to start practicing with sample questions.</p>
        </div>
        <div className="card-grid">
          {weekQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </section>

      <section className="coming-soon">
        <div>
          <p className="eyebrow">Coming Soon</p>
          <h2>More student-focused features</h2>
        </div>
        <p>
          Timed mock mode, difficulty filters, saved progress, and chapter-wise performance charts
          can be added next without changing the current API shape.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
