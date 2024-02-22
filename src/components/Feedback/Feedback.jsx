// import styles from "./Feedback.module.css";

const Feedback = ({
  responses: { good, neutral, bad },
  countTotal,
  positiveReviews,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotal}</p>
      <p>Positive: {positiveReviews}</p>
    </div>
  );
};

export default Feedback;
