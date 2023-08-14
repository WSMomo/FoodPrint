import Home from "./assets/scenes/Home";
import Quiz from "./assets/scenes/Quiz";
import { useState } from "react";
import Result from "./assets/scenes/Result";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main-color">
      {!isStarted && !isFinished && <Home setIsStarted={setIsStarted} />}
      {isStarted && !isFinished && <Quiz setIsFinished={setIsFinished} />}
      {isFinished && (
        <Result setIsStarted={setIsStarted} setIsFinished={setIsFinished} />
      )}
    </div>
  );
}

export default App;
