import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import { useEffect, useState } from "react";
import "./App.css";

const reviews = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedState = window.localStorage.getItem("saved-state");
    return savedState ? JSON.parse(savedState) : reviews;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-state", JSON.stringify(feedback));
  }, [feedback]);

  const removeState = () => {
    setFeedback(reviews);
  };

  const totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const positiveCalcPercent = ({ good, neutral }) =>
    Math.round(((good + neutral) / totalFeedback(feedback)) * 100);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        calcTotal={totalFeedback(feedback)}
        removeFeedback={removeState}
      />
      {totalFeedback(feedback) ? (
        <Feedback
          responses={feedback}
          countTotal={totalFeedback(feedback)}
          positiveReviews={positiveCalcPercent(feedback)}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
