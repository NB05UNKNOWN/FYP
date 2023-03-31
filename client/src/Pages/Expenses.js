import React from 'react';
import Form from '../Components/Expense/Form';
import ExpenseGraph from '../Components/Expense/ExpenseGraph';

function Expenses() {
  return (
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 ">
      <br />
      <br />
      <ExpenseGraph />
      <Form />
    </div>
  );
}

export default Expenses;
