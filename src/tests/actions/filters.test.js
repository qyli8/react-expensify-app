import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment'
 test('should generate set start date filter action',()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate: moment(0)
  })
 })

 test('should generate set end date filter action',()=>{
   const action = setEndDate(moment(0))
   expect(action).toEqual(
    {
      type:'SET_END_DATE',
      endDate:moment(0)
    }
   )

 })

 test('should generate set text filter action with search string',()=>{
   const text ='test string'
   const action = setTextFilter(text)
   expect(action).toEqual(
    {
      type:'SET_TEXT_FILTER',
      text
    }
   )

 })

 test('should generate set text filter action by defualt - empy string',()=>{
   const action = setTextFilter()
   expect(action).toEqual(
    {
      type:'SET_TEXT_FILTER',
      text:''
    }
   )

 })

 test('should generate set sort by amount filter',()=>{
   const action = sortByAmount()
   expect(action).toEqual(
    {
      type:'SORT_BY_AMOUNT'
    })
  })

  test('should generate set sort by date filter',()=>{
   const action = sortByDate()
   expect(action).toEqual(
    {
      type:'SORT_BY_DATE'
    })
  })
