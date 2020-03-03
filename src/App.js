import React from "react";

import HistoryMoney from "./components/HistoryMoney";
import MoneyData from "./components/MoneyData";
import NewTransaction from "./components/NewTransaction";

import { GlobalProvider } from "./GlobalState";

import { Container } from "@material-ui/core";

import "./App.sass";

function App() {
  return (
    <Container maxWidth="sm">
      <GlobalProvider>
        <div className="wrapper">
          <MoneyData />
          <HistoryMoney />
          <NewTransaction />
        </div>
      </GlobalProvider>
    </Container>
  );
}

export default App;
