import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import joi from 'joi';
import axios from 'axios';

import FormNewRecord from '../components/FormNewRecord';
import stringStripHtml from 'string-strip-html';

export default function ShowWallet() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [ amount, setAmount ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ disabledButton , setDisabledButton ] = useState(false);
  const [ error, setError ] = useState(null);

  if(!user || !user.token) history.push('/sign-in');

  function submitNewEntry(e){
    e.preventDefault();
    setDisabledButton(true);
    const data = {
      amount: stringStripHtml(amount).result,
      description: stringStripHtml(description).result
    }
    const schemaEntry = joi.object({
      description: joi.string().pattern(/[\w\s\d]/, 'apenas letras e numeros').trim().required(),
      amount: joi.string().pattern(/^[0-9]+(,[0-9]{1,2})?$/, 'formato do valor deve ser x,xx').required(),
    })
    const { error } = schemaEntry.validate(data);
    if(error){
      setError(error.message);
      setDisabledButton(false);
    }else{
      axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/wallet/entry`, 
        {...data, kind: 'entry'},
        {headers : {'Authorization' : `Bearer ${user.token}`}}
      )
      .then(() => {
        history.push('/');
        setDisabledButton(false);
      })
      .catch(err => {
        setDisabledButton(false);
        console.log(err)
      })
    }
  }
  
  return (
    <FormNewRecord
      onSubmit={submitNewEntry}
      name='entrada'
      valueAmount={amount}
      onChangeAmount={e => setAmount(e.target.value)}
      valueDescription={description}
      onChangeDescription={e => setDescription(e.target.value)}
      disabledButton={disabledButton}
      error={error}
    />
  )
};