import React from "react";

const BillSplit = ({ billSplit }) => {
  console.log(billSplit);
  return (
    <>
      {billSplit && (
        <div className="bill-split">
          <form action="">
            <h2 style={{ textTransform: "uppercase" }}>
              SPLIT A BILL WITH {billSplit.name.split(" ")[0]}
            </h2>
            <div className="input-container">
              <label htmlFor="bill">💰 Bill value</label>
              <input className="total-bill" type="text" name="bill" />
            </div>
            <div className="input-container">
              <label htmlFor="bill">🧍‍♀️ Your expense</label>
              <input className="your-bill" type="text" name="bill" />
            </div>
            <div className="input-container">
              <label htmlFor="bill">👫 Clark's expense</label>
              <input type="text" name="bill" disabled />
            </div>
            <div className="input-container">
              <label htmlFor="bill">🤑 Who is paying the bill</label>
              <select name="bill-pay">
                <option value="Clark">You</option>
                <option value="Sarah">{billSplit.name.split(" ")[0]}</option>
              </select>
            </div>
            <div className="bill-button">
              <button className="button">Split Bill</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BillSplit;
