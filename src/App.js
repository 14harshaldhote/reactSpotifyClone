
import React,{ useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify= new SpotifyWebApi();



function App() {
  const[token,setToken] =useState(null);  
//run code based on the condition
useEffect(()=>{
  const hash= getTokenFromUrl(); //getting tokenn from url :)
  window.location.hash = ""; // it will show clean url
  const _token=hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("👨 ", user);
      })
    }

  console.log("Got the token 👉  ",token);
},[]);

  return (
    <div className="app">{ token ? ( <Player /> ):( <Login /> )}
    </div>
  );
}

export default App;
