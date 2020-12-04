import React from 'react';
import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';

export default function FormSignUp(props) {
  const { 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setpassword, 
    confirmPassword, 
    setconfirmPassword, 
    error,
    handleSignUp,
    disabledButton
  } = props;
  
  return (
    <Form onSubmit={handleSignUp}>
        <Input 
          type='text'
          placeholder='Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input 
          type='password'
          placeholder='Confirme a senha'
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
        <Button
          width='100%'
          height='50px'
          type='submit'
          disabledButton={disabledButton}
        >
          Cadastrar
        </Button>
        {error && <Error>{error}</Error>}
      </Form>
  )
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;