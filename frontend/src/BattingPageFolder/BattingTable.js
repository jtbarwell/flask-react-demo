import React from 'react';
import { useTable, useSortBy } from 'react-table';


export default function BattingTable({ data, condition }) {

    const filteredData = React.useMemo(() => {
        if (!condition) return data;
        return data.filter(row => condition);
    }, [data, condition]);

    const columns = React.useMemo(
        () =>
        [
            'Team', 'Player', 'Age', 'Pos', 'WAR', 'G', 'PA', 'AB', 
            'R', 'H', '[2B]', '[3B]', 'HR', 'RBI', 'SB', 'CS', 
            'BB', 'SO', 'BA', 'OBP', 'SLG', 'OPS', '[OPS+]', 
            'rOBA', '[Rbat+]', 'TB', 'GIDP', 'HBP', 'SH', 'SF', 'IBB'
        ].map(col => ({
            Header: col.replace(/[\[\]]/g, ''),
            accessor: row => row[col]
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
