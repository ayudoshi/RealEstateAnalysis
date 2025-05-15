import React from 'react';

function DataTable({ tableData }) {
  if (!tableData || tableData.length === 0) return null;

  const columns = Object.keys(tableData[0]);

  const downloadCSV = () => {
    const header = columns.join(',');
    const rows = tableData.map(row => columns.map(col => `"${row[col]}"`).join(','));
    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'filtered_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ marginTop: '30px', textAlign: 'left' }}>
      <h3>Filtered Data</h3>
      <button onClick={downloadCSV} style={{ marginBottom: '10px' }}>Download CSV</button>
      
      <div style={{ overflowX: 'auto' }}>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ minWidth: '600px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {columns.map((col, idx) => <th key={idx}>{col}</th>)}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col, j) => <td key={j}>{row[col]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
