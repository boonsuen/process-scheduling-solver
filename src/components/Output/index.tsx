import styled, { keyframes } from 'styled-components';
import GanttChart from './GanttChart';
import Table from './Table';
import { solve } from '../../algorithms';
import { OptionType } from '../Input/AlgoSelect';

import { media } from '../GlobalStyle.css';

const StyledOutput = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  ${media['600']`padding: 0.5rem 1.1rem 1.5rem 1.1rem;`}
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 2px 32px rgba(15, 91, 206, 0.1);
  border-radius: 15px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  align-self: baseline;
  ${media['1050']`align-self: normal;`}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  ${media['600']`
    font-size: 14px;
  `}
`;

const AlgoValue = styled.span`
  background-color: #e8fff7;
  font-weight: 500;
  border-radius: 5px;
  padding: 8px 10px;
  ${media['600']`
    font-size: 14px;
  `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = ({ duration = 600, delay = 0, children, ...delegated }) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

type OutputProps = {
  selectedAlgo: OptionType;
  arrivalTime: number[];
  burstTime: number[];
  timeQuantum: number;
  priorities: number[];
};

const Output = ({
  selectedAlgo,
  arrivalTime,
  burstTime,
  timeQuantum,
  priorities,
}: OutputProps) => {
  if (!arrivalTime.length || !burstTime.length) {
    return (
      <StyledOutput>
        <Header>
          <h1>Output</h1>
        </Header>
        <Text>Gantt chart and table will be shown here</Text>
      </StyledOutput>
    );
  } else {
    const { solvedProcessesInfo, ganttChartInfo } = solve(
      selectedAlgo.value,
      arrivalTime,
      burstTime,
      timeQuantum,
      priorities
    );
    return (
      <StyledOutput>
        <Header>
          <h1>Output</h1>
          <AlgoValue title={`Currently selected: ${selectedAlgo.label}`}>
            {selectedAlgo.value}
          </AlgoValue>
        </Header>
        {
          <FadeIn>
            <GanttChart {...{ ganttChartInfo }} />
            <Table {...{ solvedProcessesInfo }} />
          </FadeIn>
        }
      </StyledOutput>
    );
  }
};

export default Output;
