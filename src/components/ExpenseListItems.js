import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import Edit from '@material-ui/icons'

export const ListItems = ({ description, amount, createdAt, id, note }) => {
  const CustomTableCell = withStyles(theme => ({
    body: {
      fontSize: 14
    },
  }))(TableCell);

  const CustomTableRow = withStyles(theme=>({

  }))

  return(

  // 
  <TableRow >
    <CustomTableCell align="center" size="medium" variant="body">{description}</CustomTableCell>
    <CustomTableCell align="center" size="medium" variant="body">{moment(createdAt).format('Do MMM, YYYY')}</CustomTableCell>
    <CustomTableCell align="center" size="medium" variant="body">{numeral(amount / 100).format('$0,0.00')}</CustomTableCell>
    <CustomTableCell align="center" size="medium" variant="body"><Link className="list-item" to={`/edit/${id}`}>Edit</Link></CustomTableCell>
  </TableRow>
  // {note&&<p>{note}</p>}

)};

export default ListItems