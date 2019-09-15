import React from "react";
import ExpenseSumary from './ExpenseSummary'
import { connect } from 'react-redux';
import moment from 'moment'
import {
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

export const DashBoardPage = (props) => {
  const data = [
    {
      "name": moment().subtract(7, 'months').format('MMM YYYY'),
      "expense": props.monthSevenExpenses
    },
    {
      "name": moment().subtract(6, 'months').format('MMM YYYY'),
      "expense": props.monthSixExpenses
    },
    {
      "name": moment().subtract(5, 'months').format('MMM YYYY'),
      "expense": props.monthFiveExpenses,
    },
    {
      "name": moment().subtract(4, 'months').format('MMM YYYY'),
      "expense": props.monthFourExpenses,
    },
    {
      "name": moment().subtract(3, 'months').format('MMM YYYY'),
      "expense": props.monthThreeExpenses,
    },
    {
      "name": moment().subtract(2, 'months').format('MMM YYYY'),
      "expense": props.monthTwoExpenses,
    },
    {
      "name": moment().subtract(1, 'months').format('MMM YYYY'),
      "expense": props.monthOneExpenses,
    }
  ]
  return (
    <div>
      <ExpenseSumary path={props.match.path} />
      <div className="data_row">
        <div className="data_title">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expense" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </div>
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    monthOneExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(1, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    monthTwoExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(2, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    monthThreeExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(3, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    monthFourExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(4, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    monthFiveExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(5, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    monthSixExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(6, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    monthSevenExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(7, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    last7Months: [
      moment().subtract(1, 'months').format('MMM', 'YYYY'),
      moment().subtract(2, 'months').format('MMM', 'YYYY'),
      moment().subtract(3, 'months').format('MMM', 'YYYY'),
      moment().subtract(4, 'months').format('MMM', 'YYYY'),
      moment().subtract(5, 'months').format('MMM', 'YYYY'),
      moment().subtract(6, 'months').format('MMM', 'YYYY'),
      moment().subtract(7, 'months').format('MMM', 'YYYY')
    ]
  }
}

export default connect(mapStateToProps)(DashBoardPage);