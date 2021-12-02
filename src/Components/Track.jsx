import React from 'react';
import './Track.css'
import playIcon from '../images/play.png'

export let Track = (props)=>{
    return(
        <div className="Track">
            <img src={playIcon} onClick={props.play}/>
            <p>{props.name}</p>
        </div>
    )
}