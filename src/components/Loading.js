import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return <Spin src='./load.gif' />
};

const Spin = styled.img`
  width: 60%;
  height: auto;
  margin: auto 0;
`;
