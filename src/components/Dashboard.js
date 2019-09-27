import React from "react";
import ExpenseSumary from './ExpenseSummary'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Timeline, TimelineEvent } from 'react-event-timeline'

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

export const DashBoardPage = (props) => {

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
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
      fill="#8884d8"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central">
        {`${data01[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const data = [
    {
      "name": moment().subtract(6, 'months').format('MMM YYYY'),
      "expense": props.monthSixExpenses,
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
      <ExpenseSumary path={props.match.path} />
      <div className="flex-container">
        <div style={{ 'flexGrow': '0.2' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className="chart-container">
            <Paper className={classes.paper} >
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
            </Paper>
            </div>
            <div className="chart-container">
            <Paper className={classes.paper} >
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
            </Paper>
            </div>
          </div>
        </div>
        <div style={{ "flexGrow": "0.5", marginBottom: "2rem", fontSize:"18px" }} >
          <Timeline lineColor="rgb(63, 81, 181)" >
            <TimelineEvent title="John Doe sent a SMS"
              createdAt="2016-09-12 10:06 PM"
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}

            >
              $656.60
            </TimelineEvent>
            <TimelineEvent
              title=" Item 3"
              createdAt="2016-09-11 09:06 AM"
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
              $37.34
            </TimelineEvent>
            <TimelineEvent
              title=" Item 3"
              createdAt="2016-09-11 09:06 AM"
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
              $37.34
            </TimelineEvent>
            <TimelineEvent
              title=" Item 3"
              createdAt="2016-09-11 09:06 AM"
              bubbleStyle={{ 'border': '2px solid rgb(63, 81, 181)' }}
            >
              $37.34
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
    monthSixExpenses: state.expenses.filter((e) => moment(e.createdAt).get('month') === moment().subtract(5, 'months').get('month')).reduce((total, currentExpense) => total + parseFloat(currentExpense.amount), 0)
  }
}

export default connect(mapStateToProps)(DashBoardPage);