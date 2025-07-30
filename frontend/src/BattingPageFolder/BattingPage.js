import React, { useEffect, useState } from 'react';
import BattingTable from './BattingTable';

export default function BattingPage() {
  const [batting, setBatting] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/batting')
      .then(res => res.json())
      .then(setBatting)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Batting Page</h1>
      <p>This is where the batting stats and lists will go!</p>
      <BattingTable data={batting} />
    </div>
  );
}
