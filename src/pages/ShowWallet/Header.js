import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdExitToApp } from 'react-icons/md';

export default function Header(props) {
  const { user, setUser } = props

  function handleSignOut(){
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/sign-out`, 
        null, 
        {headers : {'Authorization' : `Bearer ${user.token}`}}
      )
      .then(() => {
        setUser('');
      })
      .catch(() => {
        setUser('');
      })
  }

  return (
    <Container>
      <Title>Olá, {user.name}</Title>
      <MdExitToApp onClick={handleSignOut} />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  color: #FFFFFF;

  svg{
    font-size: 25px;
  }
`;

const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
`;