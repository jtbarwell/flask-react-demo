import React, { useEffect, useState } from 'react';
import BattingTable from '../BattingTable';

export default function TORBattingPage() {
  const [batting, setBatting] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/batting')
      .then(res => res.json())
      .then(setBatting)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Toronto Blue Jays Batting</h1>
      <p></p>
      <BattingTable data={batting} condition={row => row.Team === "TOR"} />
    </div>
  );
}
