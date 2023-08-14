import Home from "./assets/components/Home";
import Quiz from "./assets/components/Quiz";
import { useState } from "react";
import Result from "./assets/components/Result";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main-color">
      {!isStarted && !isFinished && <Home setIsStarted={setIsStarted} />}
      {isStarted && !isFinished && <Quiz setIsFinished={setIsFinished} />}
      {isFinished && <Result />}
    </div>
  );
}

export default App;
