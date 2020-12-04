import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ItemWallet from './ItemWallet';
import Loading from '../../components/Loading';

export default function Wallet({ user, setUser, refresh }) {
  const [ itemsWallet, setItemsWallet ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/wallet`,
        {headers : {'Authorization' : `Bearer ${user.token}`}}
      )
      .then(response => {
        setItemsWallet([...response.data])
        setTimeout(() => {
          setLoading(false)
        },1000)
      })
      .catch(err => {
        if(err.response.status === 401){
          setUser('');
        }
      })
  }, [refresh]);

  return (
    <Container>
      {
        (loading)
          ? <Loading />
          : itemsWallet.length === 0
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