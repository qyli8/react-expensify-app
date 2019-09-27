import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import {TotalItems, TotalCost} from '../actions/calculateExpenses'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import { DateRangePicker } from 'react-dates'
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const CustomSelect = withStyles(theme => ({
  select: {
    "height": "1rem",
    "width":"10rem",
    "fontSize":"large"
  },
}))(Select);

const CustomMenuItem=withStyles(theme=>({
  root:{
    "fontSize":"medium"
  }
}))(MenuItem)

const CustomInputLabel=withStyles(theme=>({
  root: {
    "fontSize":"medium",
    color:"#3f51b5"
  }
}))(InputLabel)

const SytledSearchIcon=withStyles(theme=>({
  root: {
    fontSize:"large"
  }
}))(Search)

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused })
  }
  onSetTextFilterChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  onSetSortByChange = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
  }
  render() {
    return (
      <div className="content-container">
        <div >
          <TextField
            id="filled-search"
            type="search"
            fullWidth
            className="input"
            type="text"
            onChange={this.onSetTextFilterChange}
            placeholder="Search Expenses"
            InputProps={{
              startAdornment: <InputAdornment position="start"><SytledSearchIcon /></InputAdornment>,
              style: {
                fontSize: "large",
                color:"#3f51b5"
              }
            }}
          />
        </div>
        <div className="input-group">
          <Hidden mdUp>
            <div className="input-group__item">
              <div >
                <CustomInputLabel htmlFor="age-helper">Sort By</CustomInputLabel>
                <CustomSelect
                  value={this.props.filters.sortBy}
                  onChange={this.onSetSortByChange}                 
                  input={<OutlinedInput labelWidth={10}  name="sort_by" id="outlined-sort-by" />}
                >
                <CustomMenuItem value="date">Date</CustomMenuItem>
                <CustomMenuItem value="amount">Amount</CustomMenuItem>
                </CustomSelect>
              </div>
            </div>
          </Hidden>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
              startDateId="start"
              endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
              endDateId="end"
              onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
              focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>

    )
  }
}


const mapStateToProps = (state) => ({
  filters: state.filter,
  expenseTotal: numeral(TotalCost(getVisibleExpenses(state.expenses, state.filter))).format('$0,0.00'),
    expenseCount: TotalItems(getVisibleExpenses(state.expenses, state.filter)),
    expenseWord: TotalCost(getVisibleExpenses(state.expenses, state.filter))===1?'expense':'expenses'
})

const matchDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, matchDispatchToProps)(ExpenseListFilters);