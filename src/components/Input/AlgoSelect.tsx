import { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'FCFS',
    label: 'First Come First Serve (FCFS)',
  }
];

const AlgoSelect = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'FCFS',
    label: 'First Come First Serve (FCFS)',
  });

  useEffect(() => {

  }, [selectedOption]);

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      instanceId="react-select-algo"
      inputId="react-select-algo"
    />
  );
};

export default AlgoSelect;
