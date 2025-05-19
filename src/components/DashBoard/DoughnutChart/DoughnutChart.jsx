import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ streak, total }) => {
  const percentage = Math.round((streak / total) * 100);

  const data = {
    datasets: [
      {
        data: [streak, total - streak],
        backgroundColor: ['#49b8ba', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div style={{ position: 'relative', width: 200, height: 200 }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default DoughnutChart;
