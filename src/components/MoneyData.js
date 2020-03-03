import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";

export default function MoneyData() {
  const context = useContext(GlobalContext);
  console.log(context);

  let balance = context.transactions.map(trans => trans.amount);

  let expense = balance.filter(inc => {
    inc = String(inc);
    if (inc[0] === "-") {
      return Number(inc);
    }
    return null;
  });
  let income = balance.filter(inc => {
    inc = String(inc);
    if (inc[0] !== "-") {
      return Number(inc);
    }
  });

  income = income.length > 0 ? income.reduce((a, b) => a + b) : "0";
  expense = expense.length > 0 ? expense.reduce((a, b) => a + b) : "0";
  balance = balance.length > 0 ? balance.reduce((a, b) => a + b) : "0";

  return (
    <div className="moneyData">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <p>
          Your balance <span className="balance__yourBalance">$ {balance}</span>
        </p>

        <div className="balance-data">
          <div className="balance-data__income">
            Income<br></br> <span className="green">${income}</span>
          </div>

          <div className="balance-data__expense">
            Expense <br></br>
            <span className="red">$ {expense}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
