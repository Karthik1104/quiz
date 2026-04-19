import { NavLink } from "react-router-dom";

const QuizTabs = ({ quizzes }) => (
  <section className="tabs-section">
    <div className="tabs-section__header">
      <h2>Explore Quiz Sections</h2>
      <p>Jump directly to any NPTEL week, the final practice quiz, or the mock quiz collection.</p>
    </div>

    <div className="tabs">
      {quizzes
        .filter((quiz) => quiz.category === "week")
        .map((quiz) => (
        <NavLink key={quiz.id} className="tab-chip" to={`/quiz/${quiz.id}`}>
          {quiz.title.replace(" Quiz", "")}
        </NavLink>
      ))}
      {quizzes
        .filter((quiz) => quiz.category === "final")
        .map((quiz) => (
          <NavLink key={quiz.id} className="tab-chip tab-chip--accent" to={`/quiz/${quiz.id}`}>
            Final Practice
          </NavLink>
        ))}
      <NavLink className="tab-chip tab-chip--accent" to="/mock">
        Mock Quiz
      </NavLink>
    </div>
  </section>
);

export default QuizTabs;
