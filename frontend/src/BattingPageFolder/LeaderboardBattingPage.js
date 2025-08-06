import React, { useEffect, useState } from 'react';
import BattingTable from './BattingTable';

export default function AllStatsBattingPage() {
  const [batting, setBatting] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/batting')
      .then(res => res.json())
      .then(setBatting)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Batting Leaders</h1>
      <p>Leader is determined by whether their OPS is &gt;= 0.850</p>
      <BattingTable data={batting} condition={row => row.OPS >= 0.850} />
    </div>
  );
}
