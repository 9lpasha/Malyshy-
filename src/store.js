import Dama from './music/Miyagi - Эндшпиль - Дама.mp3'
import Son from './music/Miyagi - Эндшпиль - Сын.mp3'
import Feya from './music/Miyagi - Эндшпиль - Фея.mp3'
import playIcon from './images/play.png'
import pauseIcon from './images/pause.png'

let music = []
var audio = {}
audio.sound = new Audio(Dama)
audio.name = "Dama"
audio.isPlaying = 0
music.push(audio)
audio = {
    sound: new Audio(Son),
    name: "Son",
    isPlaying: 0
}
music.push(audio)
audio = {
    sound: new Audio(Feya),
    name: "Feya",
    isPlaying: 0
}
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)
music.push(audio)

var Store = function(){
    let that = this
    this.playlist = music
    this.playClick = function(track){
        track.play()
    }
    this.pauseClick = function(track){
        track.pause()
    }
    this.clickTrack = function(i, track){
        if(that.getPlayList()[i].isPlaying){
            track.pause()
            document.getElementsByTagName('img')[i].src = playIcon
            that.getPlayList()[i].isPlaying = 0
        }
        else{
            track.play()
            document.getElementsByTagName('img')[i].src = pauseIcon
            that.getPlayList()[i].isPlaying = 1
        }
    }

    this.getPlayList = function(){
        return that.playlist
    }
}

export let store = new Store()