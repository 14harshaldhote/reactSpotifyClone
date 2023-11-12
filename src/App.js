
import React,{ useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
//run code based on the condition
useEffect(()=>{
  const token= getTokenFromUrl(); //getting tokenn from url :)
  console.log("Got the token >>>  ",token);


},[]);



  return (
    <div className="app">
   

      <Login />

    </div>
  );
}

export default App;
