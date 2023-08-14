//redux
import { Provider } from "react-redux";
import Quiz from "./assets/scenes/Quiz";
import { store } from "./assets/redux/store";

//components
// import Result from "./assets/scenes/Result";

function App() {
  // const [isStarted, setIsStarted] = useState(false);
  // const [isFinished, setIsFinished] = useState(false);
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
