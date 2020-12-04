import React, { useState } from 'react';
import styled from 'styled-components';

import ItemWallet from './ItemWallet';

export default function Wallet({ user }) {
  const [ itemsWallet, setItemsWallet ] = useState([]);

  return (
    <Container>
      {
        itemsWallet.length === 0
          ? <Text>Não há registros de entrada ou saída</Text>
          : itemsWallet.map(item => 
            <ItemWallet key={item.id} item={item} />
          )
      }
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 446px;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 18px 10px 12px;
  overflow: auto;

  div:last-child{
    padding-bottom: 18px;
  }
`;

const Text = styled.span`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  width: 250px;
  margin: auto 0;
`;