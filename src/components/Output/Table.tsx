import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  box-shadow: 0 2px 27px 7px rgba(3, 169, 245, 0.13);
  width: 80%;
  max-width: 720px;
  margin: 40px auto;
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
    border: 1px solid #727abb;
    line-height: 16.1px;
  }
`;

const HeaderCell = styled.th`
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  white-space: nowrap;
`;

type TableProps = {
  arrivalTime: string[];
  burstTime: string[];
};

const Table = ({ arrivalTime, burstTime }: TableProps) => {
  const processesInfo = arrivalTime
    .map((item, index) => {
      return {
        job: (index + 10).toString(36).toUpperCase(),
        at: parseInt(item),
        bt: parseInt(burstTime[index]),
      };
    })
    .sort((obj1, obj2) => {
      if (obj1.at > obj2.at) {
        return 1;
      }
      if (obj1.at < obj2.at) {
        return -1;
      }
      return 0;
    });

  let finishTime: number[] = [];
  const solvedProcessesInfo = processesInfo.map((process, index) => {
    if (index === 0) {
      finishTime[index] = process.at + process.bt;
    } else if (process.at > finishTime[index - 1]) {
      finishTime[index] = process.at + process.bt;
    } else {
      finishTime[index] = finishTime[index - 1] + process.bt;
    }
    return {
      ...process,
      ft: finishTime[index],
      tat: finishTime[index] - process.at,
      wat: finishTime[index] - process.at - process.bt,
    };
  });

  const total = (array: number[]) =>
    array.reduce((acc, currentValue) => acc + currentValue, 0); 

  const numberOfProcesses = solvedProcessesInfo.length;
  const turnaoundTime = solvedProcessesInfo.map(process => process.tat);
  const waitingTime = solvedProcessesInfo.map(process => process.wat);

  const totalTAT = total(turnaoundTime);
  const averageTAT = totalTAT / numberOfProcesses;

  const totalWAT = total(waitingTime);
  const averageWAT = totalWAT / numberOfProcesses;

  if (!arrivalTime.length || !burstTime.length) {
    return null;
  }

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
              {totalTAT} / {numberOfProcesses} = {averageTAT}
            </td>
            <td>
              {totalWAT} / {numberOfProcesses} = {averageWAT}
            </td>
          </tr>
        }
      </tbody>
    </StyledTable>
  );
};

export default Table;
