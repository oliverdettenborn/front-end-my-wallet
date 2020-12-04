import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';

import Header from './Header';
import Nav from './Nav';
import Wallet from './Wallet';

export default function ShowWallet() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  if(!user || !user.token) history.push('/sign-in');
  
  return (
    <Main>
      <Header />
      <Wallet />
      <Nav /> 
    </Main>
  )
};

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 25px;
`;
