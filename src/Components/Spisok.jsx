import React from 'react';
import './Spisok.css'
import {Track} from "./Track";


export let Spisok = (props)=>{

    let playlist = []
    for(let i = 0; i < props.store.getPlayList().length; i++){
        playlist.push(<Track name={props.store.getPlayList()[i].name} play={()=>{props.store.clickTrack(i, props.store.getPlayList()[i].sound)}}/>)
    }
    return(
        <div className="Spisok">
            {playlist}
        </div>
    )
}