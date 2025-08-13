import React, { useEffect, useState } from 'react';
import PitchingTable from './PitchingTable';

export default function AllStatsPitchingPage() {
	const currentYear = new Date().getFullYear();
	const startYear = 1990;
	const [selectedYear, setSelectedYear] = useState(currentYear);
	const [pitching, setPitching] = useState([]);


	//   const condition = selectedYear === "all" ? (row) => row.Year >= 0 : (row) => row.Year === Number(selectedYear);

	const condition = React.useCallback(
		selectedYear < 0
		? (row) => Number(row.Year) > 0
		: (row) => Number(row.Year) === Number(selectedYear),
		[selectedYear]
	);

	useEffect(() => {
		fetch('http://127.0.0.1:5000/api/pitching')
		.then(res => res.json())
		.then(setPitching)
		.catch(err => console.error(err));
	}, []);

	return (
		<div>
			<h1>Pitching Page</h1>

            <label htmlFor="years">Pitching Statistics for all teams:</label>
            
            <div style={{ display: 'inline-block' }}>
                <div className="d-flex justify-content-end mb-2">
                    <select id="years" className="form-select w-auto" value={selectedYear} onChange={(e)=>setSelectedYear(Number(e.target.value))}>
                        <option key="-1" value="-1">All Years</option>
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

                <PitchingTable data={pitching} condition={condition} />
            </div>
		</div>
	);
}
