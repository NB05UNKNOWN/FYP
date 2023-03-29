import React from 'react';
import Form from '../Components/Expense/Form';
import Graph from '../Components/Expense/Graph';

function Expenses() {
  return (
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 ">
      <br />
      <br />
      <Graph />
      <Form />
    </div>
  );
}

export default Expenses;
