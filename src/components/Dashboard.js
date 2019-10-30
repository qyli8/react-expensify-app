
import React from "react";
import ExpensePageOptions from './ExpensePageOptions'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import numeral from 'numeral';

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  PieChart, Pie, Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from 'recharts'
import Paper from '@material-ui/core/Paper'

export const DashBoard = (props) => {

  const data01 = [
    {
      name: moment().subtract(4, 'months').format('MMM YYYY'),
      value: props.monthFourExpenses
    },
    {
      name: moment().subtract(3, 'months').format('MMM YYYY'),
      value: props.monthThreeExpenses,
    },
    {
      name: moment().subtract(2, 'months').format('MMM YYYY'),
      value: props.monthTwoExpenses,
    },
    {
      name: moment().subtract(1, 'months').format('MMM YYYY'),
      value: props.monthOneExpenses,
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const RADIAN = Math.PI / 180;
    // eslint-disable-next-line
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    // eslint-disable-next-line
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    // eslint-disable-next-line
    const y = cy + radius * Math.sin(-midAngle * RADIAN);


    return (
      <text            
      x={x}
      y={y}
      fill="rgba(63, 81, 181, 0.9)"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central">
        {`${data01[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const data = [
    {
      "name": moment().subtract(6, 'months').format('MMM YYYY'),
      "expense": props.monthSixExpenses/100,
    },
    {
      "name": moment().subtract(5, 'months').format('MMM YYYY'),
      "expense": props.monthFiveExpenses/100,
    },
    {
      "name": moment().subtract(4, 'months').format('MMM YYYY'),
      "expense": props.monthFourExpenses/100,
    },
    {
      "name": moment().subtract(4, 'months').format('MMM YYYY'),
      "expense": props.monthFourExpenses/100,
    },
    {
      "name": moment().subtract(3, 'months').format('MMM YYYY'),
      "expense": props.monthThreeExpenses/100,
    },
    {
      "name": moment().subtract(2, 'months').format('MMM YYYY'),
      "expense": props.monthTwoExpenses/100,
    },
    {
      "name": moment().subtract(1, 'months').format('MMM YYYY'),
      "expense": props.monthOneExpenses/100,
    }
  ]

  const styles = {

    pieChartDiv: {
      height: 300,
    }

  };

  const useStyles = makeStyles(theme => ({
    paper: {
      width: "100%",
      height: "100%",
      marginBottom: "2rem",
    },
  }));

  const classes = useStyles()


  return (
    <div>
      <ExpensePageOptions path={props.match.path} />
      <div className="flex-container">
        <div style={{ 'flexGrow': '0.2' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>           
            <div className="chart-container">
            <div className={classes.paper} >
              <div style={styles.pieChartDiv}>
                <ResponsiveContainer width="95%" height="100%">
                  <PieChart>
                    <Pie
                      data={data01}
                      labelLine={true}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                      }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            </div>
            <div className="chart-container">
            <div className={classes.paper} >
              <div style={styles.pieChartDiv}>
                <ResponsiveContainer width="95%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip cursor={{ fill: 'rgb(63, 81, 181)', fillOpacity: 0.5 }} />
                    <Legend />
                    <Bar dataKey="expense" fill="rgba(63, 81, 181, 0.9)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div style={{ "flexGrow": "0.5", marginBottom: "2rem", fontSize:"18px" }} >
          <Timeline lineColor="rgb(63, 81, 181)" >
            <TimelineEvent title={props.expense1.description}
              createdAt={moment(props.expense1.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
              {numeral(props.expense1.amount/ 100).format('$0,0.00')}
            </TimelineEvent>
            <TimelineEvent
              title={props.expense2.description}
              createdAt={moment(props.expense2.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
               {numeral(props.expense2.amount/ 100).format('$0,0.00')}
            </TimelineEvent>
            <TimelineEvent
              title={props.expense3.description}
              createdAt={moment(props.expense3.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
               {numeral(props.expense3.amount/ 100).format('$0,0.00')}
            </TimelineEvent>
            <TimelineEvent
              title={props.expense4.description}
              createdAt={moment(props.expense4.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
               {numeral(props.expense4.amount/ 100).format('$0,0.00')}
            </TimelineEvent>
          </Timeline>
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
    monthSixExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(5, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0),
    expense1:state.expenses[state.expenses.length-1],
    expense2:state.expenses[state.expenses.length-2],
    expense3:state.expenses[state.expenses.length-3],
    expense4:state.expenses[state.expenses.length-4],
  }
}

export default connect(mapStateToProps)(DashBoard);