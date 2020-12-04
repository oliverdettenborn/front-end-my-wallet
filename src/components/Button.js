import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return (
    <Item 
      onClick={props.onClick}
      type={props.type}
      width={props.width}
      height={props.height}
      disabled={props.disabledButton}
    >
      {props.disabledButton
        ? '...'
        : props.children
      }
    </Item>
  )
};

const Item = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #A328D6;
  border: none;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  margin-top: 10px;

  :focus{
    outline: transparent;
  }
`;