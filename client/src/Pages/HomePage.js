import React from 'react';
import Form from '../Components/Expense/Form';
import Graph from '../Components/Expense/Graph';
import Income from '../Components/Income/Income';

function HomePage() {
  return (
    <div>
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 ">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        {/*grid columns */}
        <div className="grid md:grip-cols-2 gap-4">
          {/*Chart*/}

          <Graph />
          {/*Form */}
          <Form />
        </div>
        <div className="grid md:grip-cols-2 gap-4">
          {/*Income*/}
          <Income />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
