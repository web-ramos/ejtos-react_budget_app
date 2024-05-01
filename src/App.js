import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under
import { AppProvider } from "./context/AppContext";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseTotal from "./components/ExpenseTotal";
import AllocationForm from "./components/AllocationForm";
import Remaining from "./components/Remaining";
import Currency from "./components/Currency";
const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3'>
          {/* Add Budget component here */}
          <div className='col-sm'>
            <Budget />
          </div>
          {/* Add Remaining component here*/}
          <div className='col-sm'>
            <Remaining />
          </div>
          {/* Add ExpenseTotal component here */}
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
          <div className='col-sm'>
            <Currency />
          </div>          
        </div>
        <div className='row mt-3'>
            <h2>Allocation</h2>
          {/* Add ExpenseList component here */}
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <div className='row mt-3'>
          {/* Add AllocationForm component here under */}
          <div className='col-sm'>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
