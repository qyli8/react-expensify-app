import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates'
import Hidden from '@material-ui/core/Hidden';

export class ExpenseListFilters extends React.Component{
  state={
    calendarFocused:null
  }
  onDatesChange=({startDate, endDate})=>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange=(calendarFocused)=>{
    this.setState({calendarFocused })
  }
  onSetTextFilterChange=(e)=>{
    this.props.setTextFilter(e.target.value);
  }
  onSetSortByChange=(e)=>{
    e.target.value==='date'? this.props.sortByDate():this.props.sortByAmount()
    }
  render(){
    return(
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input className="input" type="text" onChange={this.onSetTextFilterChange} placeholder="Search Expenses"/>
          </div>
          <Hidden mdUp>
            <div className="input-group__item">
              <select className="select" onChange={this.onSetSortByChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
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
            isOutsideRange={()=>false}
            showClearDates={true}
            />
          </div>
        </div>
      </div>

    )
  }
}


const mapStateToProps=(state)=>({
  filters: state.filter
})

const matchDispatchToProps=(dispatch)=>({
  setTextFilter: (text)=>dispatch(setTextFilter(text)),
  sortByDate: ()=>dispatch(sortByDate()),
  sortByAmount: ()=>dispatch(sortByAmount()),
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
  setEndDate: (endDate)=>dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, matchDispatchToProps)(ExpenseListFilters);