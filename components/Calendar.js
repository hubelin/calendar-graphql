import React, { Component } from 'react';
import moment from 'moment';
import Week from './Week';
import DayNames from './DayNames';

import {
  CalendarWrapper,
  CalendarHeader,
  CalendarMonth,
  // CalendarHeaderArrowLeft,
  // CalendarHeaderArrowRight,
  MonthLabel
} from '../styles/styles';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment()
    };
  }
  previous = () => {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, 'month')
    });
  };

  next = () => {
    const { month } = this.state;

    this.setState({
      month: month.add(1, 'month')
    });
  };

  renderWeeks = () => {
    const { month } = this.state;
    let weeks = [];
    let done = false;
    let date = month
      .clone()
      .startOf('month')
      .add('w' - 1)
      .day('Sunday');
    let count = 0;
    let monthIndex = date.month();
    while (!done) {
      weeks.push(<Week key={date} date={date.clone()} month={month} />);

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
    return weeks;
  };

  renderMonthLabel = () => {
    const { month } = this.state;
    return <MonthLabel>{month.format('MMMM YYYY')}</MonthLabel>;
  };
  render() {
    return (
      <CalendarWrapper>
        <CalendarHeader>
          <CalendarMonth>
            {/* <CalendarHeaderArrowLeft onClick={this.previous} />*/}
            {this.renderMonthLabel()}
            {/*<CalendarHeaderArrowRight onClick={this.next*/} />}
          </CalendarMonth>
          <DayNames />
        </CalendarHeader>
        {this.renderWeeks()}
      </CalendarWrapper>
    );
  }
}

export default Calendar;
