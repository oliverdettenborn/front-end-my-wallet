import React from 'react';
import styled from 'styled-components';
import { CgAdd } from 'react-icons/cg';
import { CgRemove } from 'react-icons/cg';

import Button from '../../components/Button';

export default function Nav(props) {
  return (
    <Container>
      <Button 
        width='48%'
        height='114px'
      >
        <Description>
          <CgAdd />
          Nova entrada
        </Description>
      </Button>
      <Button 
        width='48%'
        height='114px'
      >
        <Description>
          <CgRemove />
          Nova saída
        </Description>
      </Button>
    </Container>
  )
}

const Container = styled.nav`
  width: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  height: 145px;
  position: fixed;
  bottom: 0;
  padding: 15px 0;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #FFFFFF;
  text-align: left;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 10px 10px;
  justify-content: space-between;

  svg{
    font-size: 25px;
  }
`;
