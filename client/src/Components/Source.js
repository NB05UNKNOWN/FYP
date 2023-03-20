import React from 'react';
import 'boxicons';

const obj = [
  {
    name: 'Salary',
    Color: '#90EE90',
  },
  {
    name: 'Rent 100',
    Color: '#023020',
  },
];

function Source() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">Source</h1>
      {obj.map((v, i) => (
        <Income key={i} Source={v}></Income>
      ))}
    </div>
  );
}

function Income({ Source }) {
  if (!Source) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${Source.color ?? '#00FF00'}` }}
    >
      <button className="px-3">
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
