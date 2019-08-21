import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
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
    "width":"10rem"
  },
}))(Select);

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
            classes={{ input: "2rem" }}
            id="filled-search"
            type="search"
            fullWidth
            className="input"
            type="text"
            onChange={this.onSetTextFilterChange}
            placeholder="Search Expenses"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Search size="medium" /></InputAdornment>,
              style: {
                fontSize: "large"
              }
            }}
          />
        </div>
        <div className="input-group">

          <Hidden mdUp>
            <div className="input-group__item">
              <div >
                <InputLabel htmlFor="age-helper">Sort By</InputLabel>
                <CustomSelect
                  value={this.props.sortBy}
                  onChange={this.onSetSortByChange}                 
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                  input={<OutlinedInput labelWidth={10}  name="sort_by" id="outlined-sort-by" />}
                >
                  <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
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
  filters: state.filter
})

const matchDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, matchDispatchToProps)(ExpenseListFilters);