import React from 'react';
import Day from './Day';
import { WeekWrapper } from '../styles/styles';

const Week = ({ date, month }) => {
  let days = [];
  for (let i = 0; i < 7; i += 1) {
    let day = {
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      date: date
    };
    days.push(<Day day={day} key={day.date} />);
    date = date.clone();
    date.add(1, 'day');
  }
  return <WeekWrapper>{days}</WeekWrapper>;
};

export default Week;
