
export const TotalItems = (expenses) => expenses.length
export const TotalCost = (expenses) => 
  expenses.map(e => parseFloat(e.amount) / 100).reduce((total, value) => total + value, 0)
