import React from 'react';
import { useTable, useSortBy } from 'react-table';


export default function BattingTable({ data, condition, leaders }) {

    const filteredData = React.useMemo(() => {
        let result = data;
        if (typeof condition === 'function') {
            result = data.filter(condition);
        }
        if (leaders) {
            result = [...result].sort((a, b) => Number(b.OPS) - Number(a.OPS));
        }

        return result;
    }, [data, condition]);

    const colDetail = {
            'Team':"Team", 
            'Year':"Season", 
            'Player':"Player Name", 
            'Age':"As of June 30 of the season in question", 
            'Pos':"Position", 
            'WAR':"Wins Above Replacement", 
            'G':"Games Played", 
            'PA':"Plate Appearances", 
            'AB':"At Bats", 
            'R':"Runs Scored", 
            'H':"Hits", 
            '2B':"Doubles", 
            '3B':"Triples", 
            'HR':"Home Runs", 
            'RBI':"Runs Batted In", 
            'SB':"Stolen Bases", 
            'CS':"Caught Stealing", 
            'BB':"Bases on Balls / Walks", 
            'SO':"Strikeouts", 
            'BA':"Batting Average", 
            'OBP':"On Base Percentage", 
            'SLG':"Slugging Percentage", 
            'OPS':"On Base Plus Slugging Percentages", 
            'OPS+':"OPS+", 
            'rOBA':"Measure of players offensive contributions", 
            'Rbat+':"Batting runs computed for WAR", 
            'TB':"Total Bases", 
            'GIDP':"Grounded Into Double Plays", 
            'HBP':"Hit By Pitch", 
            'SH':"Sacrifice Hits", 
            'SF':"Sacrifice Flies", 
            'IBB':"Intentional Bases on Balls"
}

    const columns = React.useMemo(
        () =>
        [
            'Team', 'Year', 'Player', 'Age', 'Pos', 'WAR', 'G', 'PA', 'AB', 
            'R', 'H', '2B', '3B', 'HR', 'RBI', 'SB', 'CS', 
            'BB', 'SO', 'BA', 'OBP', 'SLG', 'OPS', 'OPS+', 
            'rOBA', 'Rbat+', 'TB', 'GIDP', 'HBP', 'SH', 'SF', 'IBB'
        ].map(col => ({
            Header: col.replace(/[\]]/g, ''),
            accessor: row => row[col],
            title: colDetail[col.toString()]
        })),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: filteredData }, useSortBy);

    return (
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{ cursor: 'pointer' }}
                    title={column.render('title')}
                >
                    {column.render('Header')}
                    {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
                </tr>
            );
            })}
        </tbody>
        </table>
    );
}
