import React from 'react';
import { useTable, useSortBy } from 'react-table';


export default function PlayersTable({ data }) {
  const columns = React.useMemo(
    () =>
      [
        'Player', 'Pos', 'IL', 'Age'
      ].map(col => ({
        Header: col,
        accessor: col
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
