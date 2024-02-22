import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

import "./App.css";

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <>
      <Description />
      <Options />
      <Feedback responses={reviews} />
    </>
  );
}

export default App;
