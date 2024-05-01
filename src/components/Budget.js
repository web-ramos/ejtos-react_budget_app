import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, remaining, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const nextBudget = event.target.value;
    console.log(remaining);
    if (remaining + nextBudget - budget < 0) {
      alert("You cannot reduce the budget value lower than the spending");
    } else {
      setNewBudget(nextBudget);
      dispatch({
        type: "SET_BUDGET",
        payload: nextBudget,
      });
    }
  };
  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input
        style={{width: '150px'}}
        type='number'
        step='10'
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
