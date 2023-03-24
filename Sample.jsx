import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const Sample = () => {

  var pname =[{Name:"tiya",Age:24,Place:"koratty"},
  {Name:"jiya",Age:24,Place:"chalakkudy"},
  {Name:"mia",Age:24,Place:"angamaly"}]
  return (
    <TableContainer>
      <Table>
<TableHead>
  <TableRow>
  <TableCell>Name</TableCell>
  <TableCell>Age</TableCell>
  <TableCell>Place</TableCell>
  </TableRow>
</TableHead>
<TableBody>
    {pname.map((value,index)=>{
      return <TableRow>
      <TableCell>{value.Name}</TableCell>
      <TableCell>{value.Age}</TableCell>
      <TableCell>{value.Place}</TableCell>
      </TableRow>
    })}
    </TableBody>
      </Table>
      </TableContainer>
  )
}

export default Sample
