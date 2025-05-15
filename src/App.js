import React, { useState } from 'react';
import axios from 'axios';
import ChatInput from './components/ChatInput';
import SummaryBox from './components/SummaryBox';
import DataChart from './components/DataChart';
import DataTable from './components/DataTable';

function App() {
  const [summary, setSummary] = useState('');
  const [chartData, setChartData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleQuery = async (query) => {
    try {
      const res = await axios.post('http://localhost:8000/analyze/', { query });
      setSummary(res.data.summary);
      const chartRaw = res.data.chartData;
      const formattedChartData = {
        label: 'Average Flat Price',
        labels: chartRaw.map(item => item.year.toString()),
        data: chartRaw.map(item => item.avg_flat_rate)
      };
      setChartData(formattedChartData);
      setTableData(res.data.tableData);
    } catch (err) {
      console.error('Error fetching analysis:', err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Real Estate Analysis Chatbot</h1>
      <ChatInput onSubmit={handleQuery} />
      <SummaryBox summary={summary} />
      <DataChart chartData={chartData} />
      <DataTable tableData={tableData} />
    </div>
  );
}

export default App;
