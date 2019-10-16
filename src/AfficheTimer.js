import React from 'react'
import '../src/AfficheTimer.css'

export default function AfficheTimer({ms}) {
    function calcul (){
        let second=1000;
        let minute = second*60;
        let Hour= minute*60;

        let affHour=ms/Hour
        let restHour=ms%Hour
        let affMinute=restHour/minute
        let restMinute=restHour%minute
        let affSecond=restMinute/second
        return((Math.floor(affHour).toString()).padStart(2,'0') + ':'+ (Math.floor(affMinute).toString()).padStart(2,'0') + ':' +(Math.floor(affSecond).toString()).padStart(2,'0'))
    }
    return (
        <div className="container">
            <div className="temps">
                <span>{calcul()}</span>
            </div>
            <div className="aff-temps">
                <span>Hour</span>
                <span>Minute</span>
                <span>Second</span>
            </div>
        </div>
    )
}
