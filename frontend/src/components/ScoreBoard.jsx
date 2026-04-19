const ScoreBoard = ({ result, onRetry, onRefresh }) => {
  if (!result) {
    return null;
  }

  return (
    <section className="scoreboard">
      <div className="scoreboard__header">
        <div>
          <p className="eyebrow">Score Summary</p>
          <h2>{result.quizTitle}</h2>
        </div>
        <div className="score-circle">
          <strong>{result.score}</strong>
          <span>/{result.totalQuestions}</span>
        </div>
      </div>

      <div className="score-grid">
        <article>
          <h3>{result.correctAnswers}</h3>
          <p>Correct Answers</p>
        </article>
        <article>
          <h3>{result.wrongAnswers}</h3>
          <p>Wrong Answers</p>
        </article>
        <article>
          <h3>{result.percentage}%</h3>
          <p>Accuracy</p>
        </article>
      </div>

      <div className="button-row">
        <button className="button" onClick={onRetry}>
          Retry Quiz
        </button>
        <button className="button button--ghost" onClick={onRefresh}>
          Refresh Quiz Data
        </button>
      </div>
    </section>
  );
};

export default ScoreBoard;
