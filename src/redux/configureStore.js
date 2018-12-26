import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../redux/ducks";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["saved"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const allEnhancers = compose(applyMiddleware(thunk));
/*
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
*/
let store = createStore(persistedReducer, allEnhancers);
let persistor = persistStore(store);

export { store, persistor };
