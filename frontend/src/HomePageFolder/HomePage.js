import React, { useEffect, useState } from 'react';
import StandingsTable from './StandingsTable';

export default function HomePage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then(res => res.json())
      .then(setTeams)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        <h1>Home Page</h1>
        <p>This is where summary tables, and standings will go!</p>
        <div class="flex-parent-element">
            <div class="flex-child-element">
                <p>Points Breakdown for the different scoring areas</p>
            </div>
            <div class="flex-child-element">
                <StandingsTable data={teams} />
            </div>
        </div>
        
        
    </div>
  );
}