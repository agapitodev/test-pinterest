'use client';

import styled from 'styled-components';

const CheckboxContainer = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  cursor: pointer;
  & > input {
    cursor: inherit;
    opacity: 0;
    height: 0;
    width: 0;
  }
  & > label {
    cursor: inherit;
    padding-left: 2.5rem;
  }
  & > span {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 0.25rem;
    background: #fff;
    border: 1px solid rgb(var(--primary-rgb));
    margin-right: 1rem;
    pointer-events: none;
    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 7px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  & input:checked ~ span {
    background: rgb(var(--primary-rgb));
    &:after {
      display: block;
    }
  }
`;

interface CheckboxProps {
  children: React.ReactNode;
  id: string;
  value: boolean;
  setValue: (newValue: boolean) => void;
}

export default function Checkbox(props: Readonly<CheckboxProps>) {
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        id={props.id}
        checked={props.value}
        onChange={(event) => props.setValue(event.target.checked)}
      />
      <span />
      <label htmlFor={props.id}>{props.children}</label>
    </CheckboxContainer>
  );
}
