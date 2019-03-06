import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Index from "./app/index";
import { store, persistor } from "./redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import { GlobalStyle } from "./shared/globals";
import { ThemeProvider } from "styled-components";
import { dark } from "./themes/dark";

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
