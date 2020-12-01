import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  return (
    <Item 
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      required
    />
  )
};

const Item = styled.input`
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  border: none;
  padding-left: 15px;

  :focus{
    outline: transparent;
  }
`;