import React, { useEffect, useState } from 'react';
import BattingTable from './BattingTable';

export default function AllStatsBattingPage() {
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [batting, setBatting] = useState([]);


//   const condition = selectedYear === "all" ? (row) => row.Year >= 0 : (row) => row.Year === Number(selectedYear);

  const condition = React.useCallback(
    selectedYear === "all"
        ? true
        : (row) => Number(row.Year) === Number(selectedYear),
    [selectedYear]
  );

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
      <select id="years" value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
        <option key="all" value="all">All Years</option>
        {Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i).map((year) => (
            <option key={year} value={year}>
            {year}
            </option>
        ))}
      </select>
      <BattingTable data={batting} condition={condition} />
    </div>
  );
}
