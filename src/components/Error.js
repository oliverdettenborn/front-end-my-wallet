import React from 'react';
import styled from 'styled-components';

export default function Error(props) {
  return (
    <Item>
      {props.children}
    </Item>
  )
};

const Item = styled.span`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-size: 14px;
  line-height: 16px;
  color: red;
`;