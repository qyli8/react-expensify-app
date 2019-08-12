import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import Edit from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
  
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 28,
  },
}));
export const ListItems = ({ description, amount, createdAt, id, note }) => {
  const CustomTableCell = withStyles(theme => ({
    body: {
      fontSize: 14
    },
  }))(TableCell);

  const CustomTableRow = withStyles(theme=>({

  }))
  const classes = useStyles();

  return(

  // 
  <TableRow >
    <CustomTableCell align="center" size="medium" variant="body">{description}</CustomTableCell>
    <CustomTableCell align="center" size="medium" variant="body">{moment(createdAt).format('Do MMM, YYYY')}</CustomTableCell>
    <CustomTableCell align="center" size="medium" variant="body">{numeral(amount / 100).format('$0,0.00')}</CustomTableCell>
    <CustomTableCell align="center" size="medium" variant="body"><Link className="list-item" to={`/edit/${id}`}> <Edit className={classes.icon} /></Link></CustomTableCell>
  </TableRow>
  // {note&&<p>{note}</p>}

)};

export default ListItems