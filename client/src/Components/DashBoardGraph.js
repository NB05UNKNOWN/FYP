import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { getTotal, getTotalSource } from '../helper/helper';
import { default as api } from '../store/apiSlice';

const labels = ['Expence', 'Income'];

function DashBoardGraph() {
  let expenceLabel = getTotal(api.transaction);
  let incomLable = getTotalSource(api.source);

  const config = {
    data: {
      labels: labels,
      datasets: [
        {
          data: [expenceLabel, incomLable],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)'],
          borderWidth: 1,
        },
      ],
    },
  };

  console.log(expenceLabel);

  return (
    <div>
      DashBoardGraph
      <div>
        <Bar {...config} />
      </div>
    </div>
  );
}

export default DashBoardGraph;
