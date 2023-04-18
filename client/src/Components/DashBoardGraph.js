import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { getTotal } from '../helper/ExpenseHelper';
import { getTotalSource } from '../helper/IncomeHelper';
import { default as api } from '../store/apiSlice';

const labels = ['Expence', 'Income'];

function DashBoardGraph() {
  const { data } = api.useGetLabelsQuery();
  const { data: IncomeData } = api.useGetIncomeLabelsQuery();

  let Expences = getTotal(data);
  let Income = getTotalSource(IncomeData);

  const config = {
    data: {
      labels: labels,
      datasets: [
        {
          data: [Expences, Income],
          backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'],
          borderColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)'],
          borderWidth: 1,
        },
      ],
    },
  };

  return (
    <div className="flex justify-center" style={{ width: '100%' }}>
      <div className="flex justify-center w-1/2">
        <Bar {...config} width={100} height={50} />
      </div>
    </div>
  );
}

export default DashBoardGraph;
