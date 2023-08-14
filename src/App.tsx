import { Provider } from "react-redux";
import { store } from "./assets/redux/store";

import Quiz from "./assets/scenes/Quiz";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
