import React, { useEffect, Dispatch, SetStateAction } from 'react';
import Select from 'react-select';

export type AlgoType = 'FCFS' | 'SJF';
type OptionType = {
  value: AlgoType;
  label: string;
}

export const defaultOption: OptionType = {
  value: 'FCFS',
  label: 'First Come First Serve, FCFS',
};

const options: OptionType[] = [
  defaultOption,
  {
    value: 'SJF',
    label: 'Shortest Job First, SJF (non-preemptive)',
  },
];

type AlgoSelectProps = {
  selectedAlgo: {};
  setSelectedAlgo: Dispatch<SetStateAction<{}>>;
};

const AlgoSelect: React.FC<AlgoSelectProps> = ({
  selectedAlgo,
  setSelectedAlgo,
}) => {
  return (
    <Select
      defaultValue={selectedAlgo}
      onChange={setSelectedAlgo}
      options={options}
      instanceId="react-select-algo"
      inputId="react-select-algo"
    />
  );
};

export default AlgoSelect;
