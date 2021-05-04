import styled from 'styled-components';
import GanttChart from './GanttChart';
import Table from './Table';
import { solve } from './solve';
import { AlgoType } from '../Input/AlgoSelect';

const StyledOutput = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 2px 32px rgba(15, 91, 206, 0.1);
  border-radius: 15px;
  flex: 1;
  align-self: baseline;
`;

type OutputProps = {
  algo: AlgoType;
  arrivalTime: string[];
  burstTime: string[];
};

const Output = ({ algo, arrivalTime, burstTime }: OutputProps) => {
  if (!arrivalTime.length || !burstTime.length) {
    return (
      <StyledOutput>
        <h1>Output</h1>
        'Gantt chart and table will be shown here'
      </StyledOutput>
    );
  } else {
    const { solvedProcessesInfo, ganttChartInfo } = solve(
      algo,
      arrivalTime,
      burstTime
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
