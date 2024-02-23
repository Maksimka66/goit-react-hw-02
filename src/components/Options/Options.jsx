import styles from "./Options.module.css";

const Options = ({ updateFeedback, calcTotal, removeFeedback }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.good} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.neutral}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.bad} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {calcTotal ? (
        <button className={styles.reset} onClick={removeFeedback}>
          Reset
        </button>
      ) : (
        false
      )}
    </div>
  );
};

export default Options;
