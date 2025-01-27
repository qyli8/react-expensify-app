import moment from 'moment'
// Get visible expense
const getVisibleExpenses=(expenses, {text, sortBy, startDate, endDate, order})=>{
  return expenses.filter((expense)=>{
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch= startDate? startDate.isSameOrBefore(createdAtMoment, 'day') :true;
    const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day'):true;
    const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b)=>{
    if (sortBy==='date'){
      
      return order==="desc"? a.createdAt < b.createdAt?1:-1 : a.createdAt > b.createdAt? 1:-1
    }
      
    else if (sortBy==='amount'){
      return  order==="desc"?a.amount < b.amount?1:-1:a.amount > b.amount?1:-1
    }
    
  })
}

export default getVisibleExpenses;