import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Flask + React Demo</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.id}: {item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;