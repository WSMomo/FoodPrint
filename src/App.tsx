import { Provider } from "react-redux";
import { store } from "./assets/redux/store";

import Quiz from "./assets/pages/Quiz";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
