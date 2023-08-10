import React, { useState, useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.includes('@')};
  }
  if(action.type === 'BLURR_INPUT'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
}

const passwordReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.trim().length> 6};
  }
  if(action.type === 'BLURR_INPUT'){
    return {value: state.value, isValid: state.value.trim().length> 6};
  }
  return {value: '', isValid: false};
}


const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, {value: '', isValid: null})
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {value: '', isValid: null})

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const {isValid: emailIsValid} = emailState
  const {isValid: passwordIsValid} = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({type:'USER_INPUT', value:event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
      passwordDispatch({type:'USER_INPUT', value:event.target.value});

    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    emailDispatch({type:'BLURR_INPUT'});

  };

  const validatePasswordHandler = () => {
    passwordDispatch({type:'BLURR_INPUT'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
