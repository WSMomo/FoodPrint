import Home from "./assets/components/Home";
import Quiz from "./assets/components/Quiz";
import { useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main-color">
      {isStarted ? <Quiz /> : <Home setIsStarted={setIsStarted} />}
    </div>
  );
}

export default App;
