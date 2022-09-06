/* eslint-disable react/jsx-key */
import React from 'react'
import { useTable } from 'react-table'
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
type TableType ={
    columns: any[],
    data: any[]
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
    textAlign: 'center',
  },
}));
function TableComponent(props: TableType) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: props?.columns,
    data: props?.data,
  })

  // Render the UI for your table
  return (
    <div>
    <TableContainer component={Paper}>

    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // eslint-disable-next-line react/jsx-key
              <StyledTableCell {...column.getHeaderProps()}>{column.render('Header')}</StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <StyledTableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <StyledTableCell  {...cell.getCellProps()}>{cell.render('Cell')}</StyledTableCell>
              })}
            </StyledTableRow>
          )
        })}
      </TableBody>
    </Table>
    </TableContainer>
          <Pagination count={10} color="primary" />
          </div>

  )
}
export default TableComponent;
