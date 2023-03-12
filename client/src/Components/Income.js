import React from 'react';
import { useForm } from 'react-hook-form';
import Source from './Source';

function Income() {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Income </h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register('name')}
              placeholder="income source"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              {...register('amount')}
              placeholder="amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Add source
            </button>
          </div>
        </div>
      </form>
      <Source />
    </div>
  );
}

export default Income;
