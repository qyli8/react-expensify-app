import {TotalItems, TotalCost} from "../../actions/calculateExpenses"
import expenses from '../fixture/expenses'

test("more than two expenses total items",()=>{
  expect(TotalItems(expenses)).toBe(expenses.length)
})

test("more than two expenses total cost",()=>{
  expect(TotalCost(expenses)).toBe(
    50725.67
    )
})
test("two expenses total items",()=>{
  expect(TotalItems([expenses[0], expenses[1]])).toBe(2)
})

test("two expenses total cost",()=>{
  expect(TotalCost([expenses[0], expenses[1]])).toBe(
    50675.00
    )
})


test("0 expenses total items",()=>{

  expect(TotalItems([])).toBe(0)
})

test("0 expenses total cost",()=>{
  expect(TotalCost([])).toBe(0)
})

