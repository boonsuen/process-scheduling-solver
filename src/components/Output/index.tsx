import styled from 'styled-components';
import GanttChart from './GanttChart';
import Table from './Table';
import { solve } from './solve';
import { AlgoType } from '../Input/AlgoSelect';

import { media } from '../GlobalStyle.css';

const StyledOutput = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  ${media['600']`padding: 0.5rem 1.1rem 1.5rem 1.1rem;`}
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 2px 32px rgba(15, 91, 206, 0.1);
  border-radius: 15px;
  flex: 1;
  align-self: baseline;
  ${media['1050']`align-self: normal;`}
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  ${media['600']`
    font-size: 14px;
  `}
`;

type OutputProps = {
  algo: AlgoType;
  arrivalTime: number[];
  burstTime: number[];
  timeQuantum: number;
};

const Output = ({ algo, arrivalTime, burstTime, timeQuantum }: OutputProps) => {
  if (!arrivalTime.length || !burstTime.length) {
    return (
      <StyledOutput>
        <h1>Output</h1>
        <Text>Gantt chart and table will be shown here</Text>
      </StyledOutput>
    );
  } else {
    const { solvedProcessesInfo, ganttChartInfo } = solve(
      algo,
      arrivalTime,
      burstTime,
      timeQuantum
    );
    return (
      <StyledOutput>
        <h1>Output</h1>
        <GanttChart {...{ ganttChartInfo }} />
        <Table {...{ solvedProcessesInfo }} />
      </StyledOutput>
    );
  }
};

export default Output;
