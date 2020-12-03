import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function ShowWallet() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if(!user || !user.token) history.push('/sign-in');
  
  return (
    <h1>My wallet</h1>
  )
};
