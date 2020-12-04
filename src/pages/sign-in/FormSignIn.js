import React from 'react';
import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';

export default function FormSignIn(props) {
  const { email, password, error, setEmail, setpassword, handleSignIn, disabledButton } = props;
  return (
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
        disabledButton={disabledButton}
      >
        Entrar
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