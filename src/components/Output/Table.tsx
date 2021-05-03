import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  max-width: 1000px;
  margin: 0px auto 20px auto;
  border-collapse: collapse;
  border-radius: 10px;
  box-sizing: border-box;

  tr {
    height: 40px;
    line-height: 0;
  }

  th,
  td {
    text-align: left;
    padding: 15px;
    border: 1px solid #e1e1e1;
    line-height: 16.1px;
  }
`;

const HeaderCell = styled.th`
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  white-space: nowrap;
  color: #6d7187;
  background-color: #f9f9fb;
`;

const precisionRound = (number: number, precision: number) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

type TableProps = {
  solvedProcessesInfo: {
    job: string;
    at: number;
    bt: number;
    ft: number;
    tat: number;
    wat: number;
  }[];
};

const Table = ({ solvedProcessesInfo }: TableProps) => {
  const total = (array: number[]) =>
    array.reduce((acc, currentValue) => acc + currentValue, 0);

  const numberOfProcesses = solvedProcessesInfo.length;
  const turnaoundTime = solvedProcessesInfo.map((process) => process.tat);
  const waitingTime = solvedProcessesInfo.map((process) => process.wat);

  const totalTAT = total(turnaoundTime);
  const averageTAT = totalTAT / numberOfProcesses;

  const totalWAT = total(waitingTime);
  const averageWAT = totalWAT / numberOfProcesses;

  return (
    <StyledTable>
      <thead>
        <tr>
          <HeaderCell>Job</HeaderCell>
          <HeaderCell>Arrival Time</HeaderCell>
          <HeaderCell>Burst Time</HeaderCell>
          <HeaderCell>Finish Time</HeaderCell>
          <HeaderCell>Turnaround Time</HeaderCell>
          <HeaderCell>Waiting Time</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {solvedProcessesInfo.map((item, index) => (
          <tr key={`process-row-${item.job}`}>
            <td>{item.job}</td>
            <td>{item.at}</td>
            <td>{item.bt}</td>
            <td>{item.ft}</td>
            <td>{item.tat}</td>
            <td>{item.wat}</td>
          </tr>
        ))}
        {
          <tr>
            <td colSpan={4} style={{ textAlign: 'right' }}>
              Average
            </td>
            <td>
              {totalTAT} / {numberOfProcesses} = {precisionRound(averageTAT, 3)}
            </td>
            <td>
              {totalWAT} / {numberOfProcesses} = {precisionRound(averageWAT, 3)}
            </td>
          </tr>
        }
      </tbody>
    </StyledTable>
  );
};

export default Table;
