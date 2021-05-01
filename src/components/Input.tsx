import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 2px 32px rgba(15, 91, 206, 0.1);
  border-radius: 15px;
  align-self: baseline;
`;

const Form = styled.form`
  & > * + * {
    margin-top: 20px;
  }

  fieldset {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    border: none;
  }

  label {
    display: block;
  }

  input {
    width: 100%;
    height: 2.5rem;
  }

  button {
    background-color: #005bff;
    border-radius: 5px;
    color: #fff;
    width: 5.625rem;
    height: 2.5rem;
  }
`;

type InputProps = {
  setArrivalTime?: Dispatch<SetStateAction<string[]>>;
  setBurstTime?: Dispatch<SetStateAction<string[]>>;
}

const Input = (props: InputProps) => {
  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const arrivalTimeArr = arrivalTime.trim().split(/\s+/);
    props.setArrivalTime(arrivalTimeArr)

    const burstTimeArr = burstTime.trim().split(/\s+/);
    props.setBurstTime(burstTimeArr)
  };

  const handleArrivalTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setArrivalTime(e.target.value);
  };

  const handleBurstTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBurstTime(e.target.value);
  };

  return (
    <StyledInput>
      <h1>Input</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>Algorithm:</div>
          <div>First Come First Serve</div>
        </div>
        <fieldset>
          <label htmlFor="arrival-time">Arrival Time</label>
          <input
            onChange={handleArrivalTimeChange}
            type="text"
            id="arrival-time"
            placeholder="e.g. 0 2 4 6 8"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="burst-time">Burst Time</label>
          <input
            onChange={handleBurstTimeChange}
            type="text"
            id="burst-time"
            placeholder="e.g. 0 2 4 6 8"
          />
        </fieldset>
        <button type="submit">Solve</button>
      </Form>
    </StyledInput>
  );
};

export default Input;
