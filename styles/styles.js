import styled from 'styled-components';

export const CalendarWrapper = styled.section`
  display: block;
  width: 100vw;
  height: 100vh;
  border: solid 1px #cccccc;
  margin: 10px auto;
  box-shadow: 0 0 15px 0 #c0c0c0;
  font-size: 1.3rem;
  text-align: center;
`;

export const CalendarHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ed3cf;
  color: #ffffff;
  cursor: default;
  font-size: 1.4rem;
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  user-select: none;
`;

// export const CalendarHeaderArrowLeft = styled(ArrowLeft)`
//   text-align: center;
//   flex-basis: 15%;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background 0.2s;
//   height: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   :hover {
//     background: #1f5c9d;
//   }
// `;
// export const CalendarHeaderArrowRight = styled(ArrowRight)`
//   text-align: center;
//   flex-basis: 15%;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background 0.2s;
//   height: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   :hover {
//     background: #1f5c9d;
//   }
// `;

export const CalendarMonth = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100px;
  background: palevioletred;
  justify-content: space-between;
`;

export const MonthLabel = styled.span`
  flex: 1;
`;

export const DayStyles = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 87.5px;
  border-left: solid 1px #cccccc;
  cursor: pointer;
  transition: all 0.2s;
`;

export const RowStyles = styled.div`
  display: flex;
  width: 100%;
`;

export const WeekWrapper = styled.div`
  border-top: solid 1px #cccccc;
  display: flex;
  width: 100%;
`;

export const EventSummary = styled.span`
  font-size: 16px;
  color: red;
  margin-left: 300px;
  order: 1;
`;

export const EventTime = styled.span`
  font-size: 16px;
  color: blue;
  margin-right: 300px;
  order: 2;
`;

export const EventText = styled.div`
  background: papayawhip;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100vw;

  align-items: center;
`;

export const FormatFont = styled.span`
  display: flex;
  justify-self: center;
`;

// export const CodeBlockIcon = styled(CodeBlock)`
//   text-align: center;
//   flex-basis: 15%;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background 0.2s;
//   height: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
