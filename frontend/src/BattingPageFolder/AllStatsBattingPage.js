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

            <label htmlFor="years">Batting Statistics for all teams:</label>
            
            <div style={{ display: 'inline-block' }}>
                <div className="d-flex justify-content-end mb-2">
                    <select id="years" className="form-select w-auto" value={selectedYear} onChange={(e)=>setSelectedYear(Number(e.target.value))}>
                        <option key="all" value="all">All Years</option>
                            {
                                Array.from(
                                    { length: currentYear - startYear + 1 }, 
                                    (_, i) => currentYear - i
                                ).map(
                                    (year) => (
                                        <option key={year} value={year}>{year}</option>
                                    )
                                )
                            }
                    </select>
                </div>

                <BattingTable data={batting} condition={condition} />
            </div>
		</div>
	);
}
