import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/ducks";

const allEnhancers = compose(
  applyMiddleware(thunk),

  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

let store = createStore(rootReducer, allEnhancers);

export { store };
