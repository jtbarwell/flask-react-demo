import React, { useEffect, useState } from 'react';
import BattingTable from '../../BattingTable';

export default function KCRBattingPage() {
    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [batting, setBatting] = useState([]);

    const condition = React.useCallback(
        selectedYear < 0
        ? (row) => Number(row.Year) > 0
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
            <h1>Kansas City Royals Batting</h1>

            <label htmlFor="years">Batting Statistics for the Kansas City Royals:</label>
            
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

                <BattingTable data={batting} condition={row => row.Team === "KCR" && condition(row)} />
            </div>
        </div>
    );
}
