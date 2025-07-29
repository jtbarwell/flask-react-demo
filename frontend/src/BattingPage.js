import React, { useEffect, useState } from 'react';

export default function BattingPage() {
  const [batting, setBatting] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/batting')
      .then(res => res.json())
      .then(setBatting)
      .catch(err => console.error(err));
  }, []);

  const columns = [
  'Team',
  'Year',
  'Player',
  'Age',
  'Pos',
  'WAR',
  'G',
  'PA',
  'AB',
  'R',
  'H',
  '[2B]',
  '[3B]',
  'HR'
];

  return (
    <div>
      <h1>Batting Page</h1>
      <p>This is where the batting stats and lists will go!</p>
      <table id="Batting_Table">
        <thead>
            <tr>
                {columns.map(col => (
                <th key={col}>{col}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {batting.map((item, index) => (
                <tr key={index}>
                {columns.map(col => (
                    <td key={col}>{item[col]}</td>
                ))}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}