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
  const [ error, setError ] = useState(null);
  const [ disabledButton , setDisabledButton ] = useState(false);

  const history = useHistory();

  if(user && user.token){
    history.push('/');
  }

  function handleSignUp(e){
    e.preventDefault();
    setDisabledButton(true);
    const data = {
      name: stripHtml(name).result,
      email: stripHtml(email).result,
      password: stripHtml(password).result,
      confirmPassword: stripHtml(confirmPassword).result
    }

    const schema = joi.object({
      name: joi.string().pattern(/^[\w\s]+$/,'name must consist only of letters and space').required(),
      email: joi.string().required(),
      password: joi.string().alphanum().min(6).max(16).required(),
      confirmPassword: joi.ref('password')
    })

    const { error } = schema.validate(data);
    if(error){
      const placeError = error.details.map(e => e.path).join(",");
      setDisabledButton(false);
      setError(
        (placeError === 'password')
          ? 'Sua senha precisa ter entre 6 e 10 caracteres e ser composta de letras e números' 
          : (placeError === 'confirmPassword')
            ? 'Confirmação de senha precisa ser igual a senha'
            : 'O seu nome deve ser composto apenas de letras'
      );
    }else{
      axios
      .post(`${process.env.REACT_APP_API_URL}/users/sign-up`, data)
      .then(() => {
        setDisabledButton(false);
        history.push('/sign-in');
      })
      .catch(err => {
        setDisabledButton(false);
        setError(err.message)
      })
    }
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
        disabledButton={disabledButton}
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
