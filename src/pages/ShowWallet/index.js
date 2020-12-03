import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import Header from './Header';
import Nav from './Nav';
import Wallet from './Wallet';

export default function ShowWallet() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  if(!user || !user.token) history.push('/sign-in');
  
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Wallet />
      <Nav /> 
    </>
  )
};
