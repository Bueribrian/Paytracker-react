import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/grid";
import { GlobalContext } from "../GlobalState";

export default function NewTransaction() {
  const [Text, setText] = useState("initialState");
  const [Amount, setAmount] = useState(0);

  const { addTransaction, transactions } = useContext(GlobalContext);

  function newTransaction() {
    let id = 0;
    id = transactions.map(trans => (trans.id > id ? (id = trans.id) : null));

    console.log(id);
    let transaction = {
      id,
      text: Text,
      amount: Number(Amount)
    };

    console.log(id, transaction);
    addTransaction(transaction);
  }

  return (
    <div className="newTransaction">
      <h2>Add new transaction</h2>
      <hr></hr>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <p>Amount (- expense, + income)</p>
          <TextField
            id="outlined-basic"
            label="transaction text"
            variant="outlined"
            onChange={e => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <p>Text</p>

          <TextField
            id="outlined-basic"
            onChange={e => setAmount(e.target.value)}
            label="amount"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              newTransaction();
            }}
            variant="contained"
            color="primary"
          >
            Add transaction
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
