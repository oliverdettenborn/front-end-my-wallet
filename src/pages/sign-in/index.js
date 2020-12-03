import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import stripHtml from "string-strip-html";
import axios from 'axios';

import UserContext from '../../context/UserContext';
import Title from '../../components/Title';
import FormSignIn from './FormSignIn';

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const [ email, setEmail ] = useState("");
  const [ password, setpassword ] = useState("");
  const [ error, setError ] = useState(null)
  const history = useHistory();

  if(user && user.token){
    history.push('/');
  }

  function handleSignIn(e){
    e.preventDefault();
    const data = {
      email: stripHtml(email).result,
      password: stripHtml(password).result
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/sign-in`, data)
      .then(response => {
        setUser(response.data)
        history.push('/');
      })
      .catch(err => {
        setError(err.message);
      })
  }

  return (
    <Container>
      <Title />
      <FormSignIn 
        email={email}
        setEmail={setEmail}
        password={password}
        setpassword={setpassword}
        handleSignIn={handleSignIn}
        error={error}
      />
      <Link to='/sign-up'>
        <Span>Primeira vez? Cadastre-se!</Span>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Span = styled.p`
  text-align: center;
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
`;