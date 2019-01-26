import React from 'react';
import { DayStyles, RowStyles } from '../styles/styles';

const DayNames = () => {
  return (
    <RowStyles>
      <DayStyles>Sun</DayStyles>
      <DayStyles>Mon</DayStyles>
      <DayStyles>Tue</DayStyles>
      <DayStyles>Wed</DayStyles>
      <DayStyles>Thu</DayStyles>
      <DayStyles>Fri</DayStyles>
      <DayStyles>Sat</DayStyles>
    </RowStyles>
  );
};

export default DayNames;
