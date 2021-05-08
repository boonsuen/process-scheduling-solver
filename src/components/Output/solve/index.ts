import { fcfs } from './fcfs';
import { sjf } from './sjf';
import { srtf } from './srtf';
import { AlgoType } from '../../Input/AlgoSelect';

export type ganttChartInfoType = {
  job: string;
  start: number;
  stop: number;
}[];

export const solve = (
  algo: AlgoType,
  arrivalTime: number[],
  burstTime: number[]
) => {
  switch (algo) {
    case 'FCFS':
      return fcfs(arrivalTime, burstTime)  
    case 'SJF':
      return sjf(arrivalTime, burstTime)  
    case 'SRTF':
      return srtf(arrivalTime, burstTime)  
    default:
      break;
  }
};
