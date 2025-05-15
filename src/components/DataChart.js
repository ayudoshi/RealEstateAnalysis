import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

function DataChart({ chartData }) {
  if (!chartData) return null;

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: chartData.label,
        data: chartData.data,
        fill: false,
        backgroundColor: 'rgb(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
        ticks: {
          callback: (value) => `₹${value}`,
        },
      },
    },
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>{chartData.label}</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default DataChart;
