import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/configureStore";
import Index from "./components/Index";
import { GlobalStyle } from "./components/globals";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  backgroundPrimary: "#3E3F4C",
  backgroundSecundary: "#2b2c3b",
  ternary: "#51525E",
  P: "#d1d1d1",
  border: "#3c3d4c",
  red: "#b74343",
  green: "#36962a",
  blue: "#486dc4"
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={darkTheme}>
        <div>
          <GlobalStyle />
          <Index />
        </div>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
