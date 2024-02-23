import styles from "./Feedback.module.css";

const Feedback = ({
  responses: { good, neutral, bad },
  countTotal,
  positiveReviews,
}) => {
  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.paragraph}>Good: {good}</p>
      <p className={styles.paragraph}>Neutral: {neutral}</p>
      <p className={styles.paragraph}>Bad: {bad}</p>
      <p className={styles.paragraph}>Total: {countTotal}</p>
      <p className={styles.paragraph}>Positive: {positiveReviews}%</p>
    </div>
  );
};

export default Feedback;
