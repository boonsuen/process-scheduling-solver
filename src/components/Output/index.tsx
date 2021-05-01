import styled from 'styled-components';
import Table from './Table';

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
  arrivalTime: string[];
  burstTime: string[];
};

const Output = ({ arrivalTime, burstTime }: OutputProps) => {
  return (
    <StyledOutput>
      <h1>Output</h1>
      Gantt chart and table will be shown here
      <Table {...{ arrivalTime, burstTime }} />
    </StyledOutput>
  );
};

export default Output;
