import React from 'react';
import 'boxicons';
import { default as api } from '../store/apiSlice';

function Source() {
  const { data, isFetching, isSuccess, isError } =
    api.useGetIncomeLabelsQuery();
  const [deleteSource] = api.useDeleteSourceMutation();

  let Source;

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteSource({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Source = <div>Fetching</div>;
  } else if (isSuccess) {
    Source = data.map((v, i) => (
      <Income key={i} Source={v} handler={handlerClick}></Income>
    ));
  } else if (isError) {
    Source = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">Source</h1>
      {Source}
    </div>
  );
}

function Income({ Source, handler }) {
  if (!Source) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${Source.color ?? '#00FF00'}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          data-id={Source._id ?? ''}
          size="15px"
          color={Source.color ?? '#00FF00'}
          name="trash"
        />
      </button>
      <span className="block w-full">
        {Source.name ?? ''}-{'>'} {Source.amount}
      </span>
    </div>
  );
}

export default Source;
