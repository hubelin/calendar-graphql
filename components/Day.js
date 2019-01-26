import React from 'react';
import { DayStyles } from '../styles/styles';
const Day = ({ day: { date, number } }) => {
  return <DayStyles>{number}</DayStyles>;
};
export default Day;
