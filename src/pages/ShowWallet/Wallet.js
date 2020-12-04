import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';
import axios from 'axios';

import ItemWallet from './ItemWallet';
import Loading from '../../components/Loading';

export default function Wallet() {
  const { user, setUser } = useContext(UserContext);
  const [ itemsWallet, setItemsWallet ] = useState([]);
  const [ total, setTotal ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/wallet`,
        {headers : {'Authorization' : `Bearer ${user.token}`}}
      )
      .then(response => {
        setItemsWallet([...response.data.records])
        setTotal(response.data.total)
        setTimeout(() => {
          setLoading(false)
        },1000)
      })
      .catch(err => {
        if(err.response.status === 401){
          setUser('');
        }
      })
  }, [user.token, setUser]);

  return (
    <Div>
      <Container>
        {
          (loading)
            ? <Loading />
            : itemsWallet.length === 0
              ? <Text>Não há registros de entrada ou saída</Text>
              : itemsWallet.map(item => <ItemWallet key={item.id} item={item} /> )
        }
      </Container>
      {
        total && 
        <Total color={total >= 0 ? '#03AC00' : '#C70000'}>
          SALDO 
          <span>{total.replace('.',',')}</span>
        </Total>
      }
    </Div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 30px);
  align-items: center;
  padding: 10px 18px 10px 12px;
  overflow: auto;

  div:last-child{
    padding-bottom: 18px;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 446px;
  background: #FFFFFF;
  border-radius: 5px;
  position: relative;
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

const Total = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  height: 30px;
  color: #000000;
  width: inherit;
  background-color: #fff;
  border-radius: 0 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  span{
    text-align: right;
    color: ${props => props.color};
  }
`;