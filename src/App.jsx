import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Hours from "./components/Hours";
import WindSpeed from "./components/WindSpeed";
import Widget from "./components/Widget";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Hours />
      <WindSpeed />
      <Widget />
    </div>
  );
};

export default App;
