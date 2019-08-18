import React from 'react';
import { connect } from 'react-redux';
import ListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { flexbox } from '@material-ui/system';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({

  header: {
    "background-color": "#f7f7ff",
    "color": "#666"
  },
  "list-item__message": {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "color": "",
    '&:hover': {
      background: "none"
    },
    fontSize: 16
  }
}));
export const ExpenseList = (props) => {

  const CustomHeaderCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);


  const classes = useStyles();
  return (
    <div className="content-container">
      <Paper>
        <Table>
          <TableHead className={classes.header}>
            <Hidden smDown>
              <tr>
                <CustomHeaderCell align="center" size="medium" variant="body">Product</CustomHeaderCell>
                <CustomHeaderCell align="center" size="medium" variant="body">Date</CustomHeaderCell>
                <CustomHeaderCell align="center" size="medium" variant="body">Amount</CustomHeaderCell>
                <CustomHeaderCell align="center" size="medium" variant="body">Actions</CustomHeaderCell>
              </tr>
            </Hidden>
            <Hidden mdUp>
              <tr >
                <CustomHeaderCell align="center" size="medium" variant="body">Product</CustomHeaderCell>
              </tr>
            </Hidden>
          </TableHead>
          <TableBody >
            {
              props.expenses.length >0 &&
              props.expenses.map(ex => (
                <ListItems {...ex} key={ex.id} />
              ))
            }
          </TableBody>

        </Table>
        {
          props.expenses.length === 0 && (

            <div className={classes["list-item__message"]}>
              <p >No Expenses</p>
            </div>

          )
        }
      </Paper>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // redux state to be used as prop(s) of a componment inside the HigerOrderComponent (configured when redux store is created)
    expenses: selectExpenses(state.expenses, state.filter)
  }
}



export default connect(mapStateToProps)(ExpenseList)