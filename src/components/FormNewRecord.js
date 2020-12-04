import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Button from './Button';
import Input from './Input';
import CurrencyInput from './CurrencyInput';
import Error from './Error';

export default function FormNewRecord(props) {
  return (
    <Container onSubmit={props.onSubmit}>
    <Title>
      Nova {props.name}
      <Link to='/'>
        <AiFillCloseCircle />
      </Link>
    </Title>
    <CurrencyInput 
      value={props.valueAmount} 
      onChange={props.onChangeAmount}
      placeholder='Valor'
      type="text"
      className='input-mask'
      required 
    />
    <Input
      value={props.valueDescription} 
      onChange={props.onChangeDescription}
      placeholder='Descrição' 
    />
    {props.error && <Error>{props.error}</Error>}
    <Button
      width='inherit'
      height='46px'
      type='submit'
      disabledButton={props.disabledButton}
    >Salvar {props.name}</Button>
    </Container>
  )
};

const Container = styled.form`
  padding: 25px;
  width: 100%;
  height: 100%;

  .input-mask{
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border: none;
    padding-left: 15px;
    margin-bottom: 15px;

    :focus{
      outline: transparent;
    }
  }
`;

const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #fff;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;