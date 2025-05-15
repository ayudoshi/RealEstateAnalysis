import React from 'react';

function SummaryBox({ summary }) {
  return summary ? (
    <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
      <h3>Summary</h3>
      <p>{summary}</p>
    </div>
  ) : null;
}

export default SummaryBox;
