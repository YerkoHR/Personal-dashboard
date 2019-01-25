import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/configureStore";
import Index from "./components/Index";
import { GlobalStyle } from "./components/globals";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  backgroundPrimary: "#343C49",
  backgroundSecundary: "#232935",
  backgroundCard: "#121923",
  font: "#7C7A8F"
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
