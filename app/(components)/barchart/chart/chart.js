'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart() {
  const labels = ["January", "February", "March", "April", "May", "June", "July"]; // Replace with your own labels
  const data = {
    labels: labels,
    datasets: [{
      label: 'Student',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div>
    
      <Line data={data} />
    </div>
  );
}
