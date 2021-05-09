import { ganttChartInfoType } from './';

export const srtf = (arrivalTime: number[], burstTime: number[]) => {
  const processesInfo = arrivalTime
    .map((item, index) => {
      return {
        job: (index + 10).toString(36).toUpperCase(),
        at: item,
        bt: burstTime[index],
      };
    })
    .sort((obj1, obj2) => {
      if (obj1.at > obj2.at) return 1;
      if (obj1.at < obj2.at) return -1;
      if (obj1.bt > obj2.bt) return 1;
      if (obj1.bt < obj2.bt) return -1;
      return 0;
    });

  const solvedProcessesInfo = [];
  const ganttChartInfo: ganttChartInfoType = [];

  const readyQueue = [];
  let currentTime = processesInfo[0].at;
  const unfinishedJobs = [...processesInfo];

  const remainingTime = processesInfo.reduce((acc, process) => {
    acc[process.job] = process.bt;
    return acc;
  }, {});

  readyQueue.push(unfinishedJobs[0]);

  while (
    Object.values(remainingTime).reduce((acc: number, cur: number) => {
      return acc + cur;
    }, 0) &&
    unfinishedJobs.length > 0
  ) {
    const jobToExecuteNext = Object.entries(remainingTime)
      .map((el, i) => {
        return {
          job: el[0],
          at: processesInfo[i].at,
          remainingTime: el[1],
        };
      })
      .filter(
        (p) =>
          p.remainingTime !== 0 &&
          readyQueue.find((process) => process.job === p.job) &&
          unfinishedJobs.find((process) => process.job === p.job)
      )
      .sort((a, b) => {
        if (a.remainingTime > b.remainingTime) return 1;
        if (a.remainingTime < b.remainingTime) return -1;
        if (a.at > b.at) return 1;
        if (a.at < b.at) return -1;
        return 0;
      })[0].job;

    const processToExecute = readyQueue.find(p => p.job === jobToExecuteNext);

    const processATLessThanBT = processesInfo.filter((p) => {
      return (
        p.at <= remainingTime[processToExecute.job] + currentTime &&
        p !== processToExecute &&
        !readyQueue.includes(p) &&
        unfinishedJobs.includes(p)
      );
    });
    let gotInterruption = false;
    processATLessThanBT.some((p) => {
      const amount = p.at - processToExecute.at;

      if (currentTime >= p.at) {
        readyQueue.push(p);
      }

      if (p.bt < processToExecute.bt - amount) {
        remainingTime[processToExecute.job] -= amount;
        readyQueue.push(p);
        currentTime += amount;
        gotInterruption = true;
        return true;
      }
    });

    if (!gotInterruption) {
      const remainingT = remainingTime[processToExecute.job];
      remainingTime[processToExecute.job] -= remainingT;
      currentTime += remainingT;
    }
    if (remainingTime[processToExecute.job] === 0) {
      const indexToRemoveUJ = unfinishedJobs.indexOf(processToExecute);
      if (indexToRemoveUJ > -1) {
        unfinishedJobs.splice(indexToRemoveUJ, 1);
      }
      const indexToRemoveRQ = readyQueue.indexOf(processToExecute);
      if (indexToRemoveRQ > -1) {
        readyQueue.splice(indexToRemoveRQ, 1);
      }

      solvedProcessesInfo.push({
        ...processToExecute,
        ft: currentTime,
        tat: currentTime - processToExecute.at,
        wat: currentTime - processToExecute.at - processToExecute.bt,
      });
    }
  }

  // Sort the processes by job name within arrival time
  solvedProcessesInfo.sort((obj1, obj2) => {
    if (obj1.at > obj2.at) return 1;
    if (obj1.at < obj2.at) return -1;
    if (obj1.job > obj2.job) return 1;
    if (obj1.job < obj2.job) return -1;
    return 0;
  });

  return { solvedProcessesInfo, ganttChartInfo };
};
