import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from'./store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// console.log(store.getState())

const unsubscribe = store.subscribe(()=>{
  const state = store.getState()
  const visibileExpenses=getVisibleExpenses(state.expenses, state.filter)
  console.log(store.getState().filter)
  console.log(visibileExpenses)
 
})

// store.dispatch(addExpense({description:'Water Bill', amount:300}))
// store.dispatch(addExpense({description:'Gas Bill', amount:200, createdAt:1000}))
// store.dispatch(addExpense({description:'Rent', amount:109500}))
// store.dispatch(setTextFilter("water"))


const jsx =(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)



ReactDOM.render(jsx, document.getElementById("app"))


