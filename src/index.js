import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/configureStore";
import Index from "./app/index";
import { dark } from "./themes";
import { GlobalStyle } from "./shared/index";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={dark}>
        <div>
          <GlobalStyle />
          <Index />
        </div>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
