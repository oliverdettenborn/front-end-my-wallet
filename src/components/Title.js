import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
  return (
    <Item>
      MyWallet
    </Item>
  )
};

const Item = styled.h1`
  font-family: 'Saira Stencil One', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
  text-align: center;
  margin: 15px;
`;