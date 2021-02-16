import React, { useState } from 'react';
import { putUser } from '../../api/api';
import './LoginScreen.css'

export const LoginScreen = ({goToFeedScreen}) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');


  const logIn = async() => {
    if (username.trim()) {
      if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        const id = await putUser(username, password);
        goToFeedScreen(id);
        return 
      } 
    }
  } 

  return (
    <>
      <h1>Feed reader</h1>
      <p>Please, login to watch all </p>
      <form 
        className="Form"
        onSubmit={(e)=>{
          e.preventDefault();
          logIn()
        }}
      >
        <label>
          Username
          <input 
            className="Form__input"
            type="text"
            title="Put your name"
            value={username}
            onChange={e=>setUsername(e.target.value)}
            required />
        </label>
        <label>
          Password
          <input 
            className="Form__input"
            type="password"
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={e=>setPassword(e.target.value)}
            required 
          />
        </label>
        <button 
          className="Button"
          type="submit"
        >
          Log In
        </button>
      </form>
    </>
  )
}