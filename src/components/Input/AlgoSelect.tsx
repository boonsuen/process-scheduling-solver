import { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'First Come First Serve', label: 'FCFS' }
];

const AlgoSelect = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'First Come First Serve',
    label: 'FCFS',
  });

  useEffect(() => {
    console.log(selectedOption);
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
