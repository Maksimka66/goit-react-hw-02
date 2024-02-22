import styles from "./Feedback.module.css";

const Feedback = ({ responses: { good, neutral, bad } }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default Feedback;