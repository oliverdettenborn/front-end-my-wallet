import React from 'react';
import styled from 'styled-components';

export default function ItemWallet({ item }) {
  const { date, description, value, type } = item;

  return (
    <Container>
      <Date>{date}</Date>
      <Description>{description}</Description>
      <Value
        color={type === 'entry' ? '#03AC00' : '#C70000'}
      >{value}</Value>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 8px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
`;

const Date = styled.p`
  color: #C6C6C6;
  flex-shrink: 0;
`;

const Description = styled.p`
  color: #000000;
  flex-grow: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  word-wrap: none;
  margin-left: 8px;
  word-break: break-word;
  margin-right: 5px;
`;

const Value = styled.p`
  text-align: right;
  color: ${props => props.color};
  flex-shrink: 0;
`;