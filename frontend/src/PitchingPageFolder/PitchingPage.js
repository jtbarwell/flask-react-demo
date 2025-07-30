import React, { useEffect, useState } from 'react';
import PitchingTable from './PitchingTable';

export default function PitchingPage() {
  const [pitching, setPitching] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/pitching')
      .then(res => res.json())
      .then(setPitching)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Pitching Page</h1>
      <p>This is where the pitching stats and lists will go!</p>
      <PitchingTable data={pitching} />
    </div>
  );
}
