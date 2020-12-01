import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import stripHtml from "string-strip-html";
import axios from 'axios'
;
import UserContext from '../../context/UserContext';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';


export default function SignIn() {
  const { user, setUser } = useContext(UserContext)
  const [ email, setEmail ] = useState("");
  const [ password, setpassword ] = useState("");
  const history = useHistory();

  if(user && user.token){
    return history.push('/');
  }

  function handleSignIn(e){
    e.preventDefault();
    const data = {
      email: stripHtml(email).result,
      senha: stripHtml(password).result
    }
    axios
      .post(`http://localhost:5000/api/users/sign-in`, data)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container>
      <Title />
      <Form onSubmit={handleSignIn}>
        <Input 
          type='email'
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button
          width='100%'
          height='50px'
          type='submit'
        >
          Entrar
        </Button>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;