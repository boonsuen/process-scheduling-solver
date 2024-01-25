import { srtf } from '../algorithms/srtf';

test('SRTF test 1', () => {
  const arrivalTime = [0, 1, 7, 9];
  const burstTime = [6, 4, 3, 1];
  expect(srtf(arrivalTime, burstTime)).toEqual({
    solvedProcessesInfo: [
      {
        job: 'A',
        at: 0,
        bt: 6,
        ft: 10,
        tat: 10,
        wat: 4,
      },
      {
        job: 'B',
        at: 1,
        bt: 4,
        ft: 5,
        tat: 4,
        wat: 0,
      },
      {
        job: 'C',
        at: 7,
        bt: 3,
        ft: 14,
        tat: 7,
        wat: 4,
      },
      {
        job: 'D',
        at: 9,
        bt: 1,
        ft: 11,
        tat: 2,
        wat: 1,
      },
    ],
    ganttChartInfo: [
      {
        job: 'A',
        start: 0,
        stop: 1,
      },
      {
        job: 'B',
        start: 1,
        stop: 5,
      },
      {
        job: 'A',
        start: 5,
        stop: 10,
      },
      {
        job: 'D',
        start: 10,
        stop: 11,
      },
      {
        job: 'C',
        start: 11,
        stop: 14,
      },
    ],
  });
});

test('SRTF test 2', () => {
  const arrivalTime = [0, 2, 2, 4];
  const burstTime = [7, 4, 5, 1];
  expect(srtf(arrivalTime, burstTime)).toEqual({
    solvedProcessesInfo: [
      {
        job: 'A',
        at: 0,
        bt: 7,
        ft: 17,
        tat: 17,
        wat: 10,
      },
      {
        job: 'B',
        at: 2,
        bt: 4,
        ft: 7,
        tat: 5,
        wat: 1,
      },
      {
        job: 'C',
        at: 2,
        bt: 5,
        ft: 12,
        tat: 10,
        wat: 5,
      },
      {
        job: 'D',
        at: 4,
        bt: 1,
        ft: 5,
        tat: 1,
        wat: 0,
      },
    ],
    ganttChartInfo: [
      {
        job: 'A',
        start: 0,
        stop: 2,
      },
      {
        job: 'B',
        start: 2,
        stop: 4,
      },
      {
        job: 'D',
        start: 4,
        stop: 5,
      },
      {
        job: 'B',
        start: 5,
        stop: 7,
      },
      {
        job: 'C',
        start: 7,
        stop: 12,
      },
      {
        job: 'A',
        start: 12,
        stop: 17,
      },
    ],
  });
});

test('SRTF test 3', () => {
  const arrivalTime = [31, 37, 21, 21, 11, 7, 7];
  const burstTime = [1, 6, 4, 6, 5, 3, 1];
  expect(srtf(arrivalTime, burstTime)).toEqual({
    solvedProcessesInfo: [
      {
        job: 'F',
        at: 7,
        bt: 3,
        ft: 11,
        tat: 4,
        wat: 1,
      },
      {
        job: 'G',
        at: 7,
        bt: 1,
        ft: 8,
        tat: 1,
        wat: 0,
      },
      {
        job: 'E',
        at: 11,
        bt: 5,
        ft: 16,
        tat: 5,
        wat: 0,
      },
      {
        job: 'C',
        at: 21,
        bt: 4,
        ft: 25,
        tat: 4,
        wat: 0,
      },
      {
        job: 'D',
        at: 21,
        bt: 6,
        ft: 31,
        tat: 10,
        wat: 4,
      },
      {
        job: 'A',
        at: 31,
        bt: 1,
        ft: 32,
        tat: 1,
        wat: 0,
      },
      {
        job: 'B',
        at: 37,
        bt: 6,
        ft: 43,
        tat: 6,
        wat: 0,
      },
    ],
    ganttChartInfo: [
      {
        job: 'G',
        start: 7,
        stop: 8,
      },
      {
        job: 'F',
        start: 8,
        stop: 11,
      },
      {
        job: 'E',
        start: 11,
        stop: 16,
      },
      {
        job: 'C',
        start: 21,
        stop: 25,
      },
      {
        job: 'D',
        start: 25,
        stop: 31,
      },
      {
        job: 'A',
        start: 31,
        stop: 32,
      },
      {
        job: 'B',
        start: 37,
        stop: 43,
      },
    ],
  });
});

test('SRTF test 4', () => {
  const arrivalTime = [8, 2, 1, 3, 4];
  const burstTime = [3, 1, 3, 2, 4];
  expect(srtf(arrivalTime, burstTime)).toEqual({
    solvedProcessesInfo: [
      {
        job: 'C',
        at: 1,
        bt: 3,
        ft: 5,
        tat: 4,
        wat: 1,
      },
      {
        job: 'B',
        at: 2,
        bt: 1,
        ft: 3,
        tat: 1,
        wat: 0,
      },
      {
        job: 'D',
        at: 3,
        bt: 2,
        ft: 7,
        tat: 4,
        wat: 2,
      },
      {
        job: 'E',
        at: 4,
        bt: 4,
        ft: 11,
        tat: 7,
        wat: 3,
      },
      {
        job: 'A',
        at: 8,
        bt: 3,
        ft: 14,
        tat: 6,
        wat: 3,
      },
    ],
    ganttChartInfo: [
      {
        job: 'C',
        start: 1,
        stop: 2,
      },
      {
        job: 'B',
        start: 2,
        stop: 3,
      },
      {
        job: 'C',
        start: 3,
        stop: 5,
      },
      {
        job: 'D',
        start: 5,
        stop: 7,
      },
      {
        job: 'E',
        start: 7,
        stop: 11,
      },
      {
        job: 'A',
        start: 11,
        stop: 14,
      },
    ],
  });
});
