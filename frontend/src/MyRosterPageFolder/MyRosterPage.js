import React, { useEffect, useState } from 'react';
import PlayersTable from './MyRosterTable';

export default function MyRosterPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/players')
      .then(res => res.json())
      .then(setPlayers)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
        <h1>My Roster</h1>
        <p>This is where my roster will go, and where I will set it!</p>
        <div class="flex-parent-element">
            <div class="flex-child-element">
                <img src = "/baseballdiamond.svg" alt = "image having issues"/>
            </div>
            <div class="flex-child-element">
                <PlayersTable data={players} />
            </div>
        </div>
        
        
    </div>
  );
}
