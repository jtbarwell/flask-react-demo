import React from 'react';
import { useTable, useSortBy } from 'react-table';


export default function PitchingTable({ data }) {
  const columns = React.useMemo(
    () =>
      [
        'Player', 'Age', 'Pos', 'WAR', 'W', 'L', '[W-L%]', 'ERA', 'G', 'GS', 'GF', 
        'CG', 'SHO', 'SV', 'IP', 'H', 'R', 'ER', 'HR', 'BB', 'IBB', 'SO', 'HBP', 
        'BK', 'WP', 'BF', '[ERA+]', 'FIP', 'WHIP', 'H9', 'HR9', 'BB9', 'SO9', '[SO/BB]'
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
  } = useTable({ columns, data }, useSortBy);

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
