import { fcfs } from './fcfs';
import { sjf } from './sjf';
import { AlgoType } from '../../Input/AlgoSelect';

export type ganttChartInfoType = {
  job: string;
  start: number;
  stop: number;
}[];

export const solve = (
  algo: AlgoType,
  arrivalTime: string[],
  burstTime: string[]
) => {
  switch (algo) {
    case 'FCFS':
      return fcfs(arrivalTime, burstTime)  
    case 'SJF':
      return sjf(arrivalTime, burstTime)  
    default:
      break;
  }
};
