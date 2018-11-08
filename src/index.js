import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import Index from "./components/Index";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
  body {
    margin: 0;
    background: ${props => props.theme.background};
    font-family:  Roboto, sans-serif;
    color: ${props => props.theme.font};
    min-height: 100%;
  }
  html{
    height: 100%;
  }

`;

const darkTheme = {
  background: "#686884",
  container: "#343C49",
  font: "#7C7A8F",
  card: "#232935"
};

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <div>
        <GlobalStyle />
        <Index />
      </div>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
