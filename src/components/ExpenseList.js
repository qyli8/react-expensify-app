import React from 'react';
import { connect } from 'react-redux';
import {sortByAmount, sortByAmountAsc, sortByDate, sortByDateAsc} from '../actions/filters';
import ListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses'
import { TotalItems, TotalCost } from '../actions/calculateExpenses'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import ExpenseListFilters from './ExpenseListFilters';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TableSortLabel from "@material-ui/core/TableSortLabel";

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
  },
  "list_footer": {
    color: "#3f51b5",
    textAlign: "right",
    fontSize: "15px",
    marginBottom: "5%",
  },
  "list_footer_span": {
    fontWeight: "bold"
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

  const amountSortHandler =(order, sortByAsc, sortByDesc)=>{
    order==="desc"? sortByAsc(): sortByDesc()
  }
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <Table>
          <TableHead className={classes.header}>
            <Hidden smDown>
              <ExpenseListFilters />
              <tr>
                <CustomHeaderCell align="center" size="medium" variant="body">Product</CustomHeaderCell>
                <CustomHeaderCell align="center" size="medium" variant="body">
                <TableSortLabel
                  active={props.sortBy.localeCompare("date")===0}
                  direction={props.order}
                  hideSortIcon={false}
                  onClick={()=>{amountSortHandler(props.order, props.sortByDateAsc, props.sortByDate)}}
                >
                  Date
                </TableSortLabel>  
                </CustomHeaderCell>
                <CustomHeaderCell align="center" size="medium" variant="body">
                <TableSortLabel
              active={props.sortBy.localeCompare("amount")===0}
              hideSortIcon={false}
              direction={props.order}
              onClick={()=>{amountSortHandler(props.order, props.sortByAmountAsc, props.sortByAmount)}}
            >
               Amount
            </TableSortLabel>
                 </CustomHeaderCell>
                <CustomHeaderCell align="center" size="medium" variant="body">Actions</CustomHeaderCell>
              </tr>
            </Hidden>
            <Hidden mdUp>
            <ExpenseListFilters />
              <tr >
                <CustomHeaderCell align="center" size="medium" variant="body">Product</CustomHeaderCell>
              </tr>
            </Hidden>
          </TableHead>
          <TableBody >
            {
              props.expenses.length > 0 &&
              props.expenses.map(ex => (
                <ListItems {...ex} key={ex.id} />
              ))
            }
          </TableBody>
          {/* <TableFooter>
            <TableRow>
             
            </TableRow>
          </TableFooter> */}

        </Table>
        {
          props.expenses.length === 0 && (

            <div className={classes["list-item__message"]}>
              <p >No Expenses</p>
            </div>

          )
        }
      </Paper>
      <div>
        <p className={classes["list_footer"]}>Viewing <span className={classes["list_footer_span"]}>
          {props.expenseCount} </span> {props.expenseWord} current expense
        <span className={classes["list_footer_span"]}> {props.expenseTotal}</span></p>
      </div>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // redux state to be used as prop(s) of a componment inside the HigerOrderComponent (configured when redux store is created)
    expenses: selectExpenses(state.expenses, state.filter),
    order: state.filter.order,
    sortBy: state.filter.sortBy,
    expenseTotal: numeral(TotalCost(getVisibleExpenses(state.expenses, state.filter))).format('$0,0.00'),
    expenseCount: TotalItems(getVisibleExpenses(state.expenses, state.filter)),
    expenseWord: TotalCost(getVisibleExpenses(state.expenses, state.filter)) === 1 ? 'expense' : 'expenses'
    
  }
}

const matchDispatchToProps = (dispatch) => ({
  sortByAmount: () => dispatch(sortByAmount()),
  sortByAmountAsc: () => dispatch(sortByAmountAsc()),
  sortByDate: ()=>dispatch(sortByDate()),
  sortByDateAsc: ()=>dispatch(sortByDateAsc())
})


export default connect(mapStateToProps, matchDispatchToProps)(ExpenseList)