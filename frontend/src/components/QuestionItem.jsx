const QuestionItem = ({
  question,
  questionNumber,
  selectedAnswer,
  onSelectAnswer,
  isSubmitted,
  reviewItem
}) => (
  <section className="question-card">
    <div className="question-card__top">
      <span className="question-card__count">Question {questionNumber}</span>
      {reviewItem ? (
        <span className={reviewItem.isCorrect ? "pill pill--correct" : "pill pill--wrong"}>
          {reviewItem.isCorrect ? "Correct" : "Wrong"}
        </span>
      ) : null}
    </div>

    <h3>{question.question}</h3>

    <div className="option-list">
      {question.options.map((option) => {
        const checked = selectedAnswer === option;
        const isCorrectAnswer = Boolean(reviewItem) && reviewItem.correctAnswer === option;
        const isWrongAnswer =
          Boolean(reviewItem) && checked && reviewItem.selectedAnswer !== reviewItem.correctAnswer;

        const className = [
          "option-item",
          checked ? "option-item--selected" : "",
          isCorrectAnswer ? "option-item--correct" : "",
          isWrongAnswer ? "option-item--wrong" : ""
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <label className={className} key={option}>
            <input
              type="radio"
              name={question.id}
              value={option}
              checked={checked}
              onChange={() => onSelectAnswer(question.id, option)}
              disabled={isSubmitted}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  </section>
);

export default QuestionItem;
