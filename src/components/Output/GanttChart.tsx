import { ganttChartInfoType } from './solve';
import styled from 'styled-components';

import { media } from '../GlobalStyle.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  ${media['600']`font-size: 16px;`}
  margin: 0 0 0.5rem 0;
  color: #424242;
`;

const JobContainer = styled.div`
  display: flex;
`;

const Job = styled.div`
  width: 40px;
  height: 35px;
  border: 1px solid #8da6ff;
  background-color: #edf4ff;
  color: #424242;
  ${media['600']`
    width: 32px;
    height: 27px;
    font-size: 14px;
  `}

  &:not(:last-child) {
    margin-right: -1px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
`;

const Time = styled.div`
  width: 40px;
  height: 20px;
  ${media['600']`
    width: 32px;
    height: 21px;
    font-size: 14px;
  `}
  border: 1px solid #fff;
  color: #444e5c;

  &:not(:last-child) {
    margin-right: -1px;
  }
`;

type GanttChartProps = {
  ganttChartInfo: ganttChartInfoType;
};

const GanttChart = ({ ganttChartInfo }: GanttChartProps) => {
  const job: string[] = [];
  const time: number[] = [];
  ganttChartInfo.forEach((item, index) => {
    if (index === 0) {
      job.push(item.job);
      time.push(item.start, item.stop);
    } else if (time.slice(-1)[0] === item.start) {
      job.push(item.job);
      time.push(item.stop);
    } else if (time.slice(-1)[0] !== item.start) {
      job.push('_', item.job);
      time.push(item.start, item.stop);
    }
  });

  return (
    <Container>
      <Title>Gantt Chart</Title>
      <JobContainer>
        {job.map((job, index) => (
          <Job key={`gc-job-${index}`} className="flex-center">
            {job}
          </Job>
        ))}
      </JobContainer>
      <TimeContainer>
        {time.map((time, index) => (
          <Time key={`gc-time-${index}`} className="flex-center">{time}</Time>
        ))}
      </TimeContainer>
    </Container>
  );
};

export default GanttChart;
