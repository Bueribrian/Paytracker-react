import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";

const Transaction = ({ data }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  let operator = String(data.amount)[0];
  return (
    <div
      className={`transaction transaction-${
        operator === "-" ? "expense" : "income"
      }`}
    >
      <span>{data.text}</span>
      <span>
        {" "}
        {operator === "-" ? "" : "+"}
        {data.amount === NaN ? "Error solo numeros" : data.amount}
      </span>
      <span
        className="transaction-delete"
        onClick={() => deleteTransaction(data.id)}
      >
        X
      </span>
    </div>
  );
};

export default function HistoryMoney() {
  const context = useContext(GlobalContext);
  console.log(context);
  return (
    <div className="historyMoney">
      <h2>History</h2>
      <hr />
      {context.transactions.length === 0
        ? "Empty"
        : context.transactions.map(trans => (
            <Transaction key={trans.id} data={trans} />
          ))}
    </div>
  );
}
