import moment from 'moment';
import filtersReducer from '../../reducers/filters'
test('should setup default filter values',()=>{
  const state = filtersReducer(undefined, {type:'testDefault'})
  expect(state).toEqual({
    text:'',
    sortBy:'date',// date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    order: 'desc'
  }
  );
});

test('should set sortBy to amount',()=>{
  const state= filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>{
  const currentState ={
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  }
  const action = {type: 'SORT_BY_DATE'}
  const state= filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date');
});


test('should set sortBy to amount',()=>{
  const action = {type: 'SET_TEXT_FILTER', text:'testing string'}
  const state= filtersReducer(undefined, action)
  expect(state.text).toBe(action.text);
});


test('should set start date',()=> {
  const action = {type:'SET_START_DATE', startDate:moment(0).add(2,'day')}
  const state = filtersReducer(undefined, action);
  expect(state.startDate.valueOf()).toBe(action.startDate.valueOf())
  
})

test('should set end date',()=> {
  const action = {type:'SET_END_DATE', endDate:moment(0).subtract(2,'day')}
  const state = filtersReducer(undefined, action);
  expect(state.endDate.valueOf()).toBe(action.endDate.valueOf())
  
})