import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import { useState } from "react";
import "./App.css";

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(reviews);
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback(feedback) ? (
        <Feedback responses={feedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
