import { ganttChartInfoType } from './';

export const sjf = (arrivalTime: string[], burstTime: string[]) => {
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
  let ganttChartInfo: ganttChartInfoType = [];

  const solvedProcessesInfo = [];
  const readyQueue = [];
  readyQueue.push(processesInfo[0]);
  finishTime[0] = processesInfo[0].at + processesInfo[0].bt;
  solvedProcessesInfo.push({
    ...processesInfo[0],
    ft: finishTime[0],
    tat: finishTime[0] - processesInfo[0].at,
    wat: finishTime[0] - processesInfo[0].at - processesInfo[0].bt,
  });  
  processesInfo.forEach(p => {
    if (p.at < finishTime[0] && !readyQueue.includes(p)) {
      readyQueue.push(p);
    }
  });
  readyQueue.shift();

  const sortedByBT = [...readyQueue].sort((a, b) => {
    if (a.bt > b.bt) {
      return 1;
    }
    if (a.bt < b.bt) {
      return -1;
    }
    return 0;
  });

  sortedByBT.forEach(process => {
    if (process.at > finishTime[finishTime.length - 1]) {
      finishTime.push(process.at + process.bt);
    } else {
      finishTime.push(finishTime[finishTime.length - 1] + process.bt);
    }

    solvedProcessesInfo.push({
      ...process,
      ft: finishTime[finishTime.length - 1],
      tat: finishTime[finishTime.length - 1] - process.at,
      wat: finishTime[finishTime.length - 1] - process.at - process.bt,
    });
  });

  solvedProcessesInfo.sort((obj1, obj2) => {
    if (obj1.at > obj2.at) {
      return 1;
    }
    if (obj1.at < obj2.at) {
      return -1;
    }
    return 0;
  });

  return { solvedProcessesInfo, ganttChartInfo };
};
