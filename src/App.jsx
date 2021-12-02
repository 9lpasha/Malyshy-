import React from 'react';
import './App.css'
import {Spisok} from './Components/Spisok'


export let App = function(props) {
  return (
    <div className="App">
        <Spisok store={props.store} />
    </div>
  );
}