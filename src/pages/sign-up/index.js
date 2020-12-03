import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import stripHtml from "string-strip-html";
import joi from 'joi';
import axios from 'axios';

import UserContext from '../../context/UserContext';
import Title from '../../components/Title';
import FormSignUp from './FormSignUp';

export default function SignUp() {
  const { user } = useContext(UserContext);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setpassword ] = useState("");
  const [ confirmPassword, setconfirmPassword ] = useState("");
  const [ error, setError ] = useState(null)

  const history = useHistory();

  if(user && user.token){
    return history.push('/');
  }

  function handleSignUp(e){
    e.preventDefault();

    const data = {
      name: stripHtml(name).result,
      email: stripHtml(email).result,
      password: stripHtml(password).result,
      confirmPassword: stripHtml(confirmPassword).result
    }

    const schema = joi.object({
      name: joi.string().pattern(/^[\w]+$/).required(),
      email: joi.string().required(),
      password: joi.string().alphanum().min(6).max(16).required(),
      confirmPassword: joi.ref('password')
    })

    const { error } = schema.validate(data);
    if(error){
      const placeError = error.details.map(e => e.path).join(",");
      console.log(placeError,typeof(placeError))
      return setError(
        (placeError === 'password')
          ? 'Sua senha precisa ter entre 6 e 10 caracteres e ser composta de letras e números' 
          : (placeError === 'confirmPassword')
            ? 'Confirmação de senha precisa ser igual a senha'
            : 'O seu nome deve ser composto apenas de letras'
      );
    }

    axios
      .post(`${process.env.API_URL}/api/users/sign-up`, data)
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
      <FormSignUp 
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setpassword={setpassword}
        confirmPassword={confirmPassword}
        setconfirmPassword={setconfirmPassword}
        error={error}
        handleSignUp={handleSignUp}
      />
      <Link to='/sign-in'>
        <Span>Já tem uma conta? Entre agora!</Span>
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
  line-height: 16px;
  color: #FFFFFF;
`;
