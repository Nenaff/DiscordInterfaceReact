import React from 'react';
import { useNavigate } from "react-router-dom";
import "./navigation.scss";

function Navigation(props: any) {
  let navigate = useNavigate();

  function openApp() {
    navigate('/channel/@me')
  }
  
  return (
    <div className="navigation">
      <h1>It's time to ditch Skype and Mumble.</h1>
      <h5>Discord is very cool bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</h5>
      <button onClick={openApp}>Open Discord</button>
    </div>
  );
}

export default Navigation;