import React, { Component } from 'react'
import AfficheTimer from './AfficheTimer'
import '../src/Timer.css'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state={
            temps:0
        }
        
    }

    start=()=>{
        if(this.state.interval){
            return
        }
        const interval=setInterval(()=>{
            this.setState({
                temps:this.state.temps+1000
            })
        },1000)
        this.setState({
            interval:interval
        })
    }
    pause=()=>{
        clearInterval(this.state.interval)
        this.setState({
            interval:undefined
        })
        return(this.state.temps)
    }
    reset=()=>{
        clearInterval(this.state.interval)
        this.setState({
            temps:0,
            interval:undefined
            
        })
    }
    render() {
        return (
            <div>
                <AfficheTimer ms={this.state.temps}/>
                <div className="input">
                <input type="button" value="Start" onClick={this.start}/>
                <input type="button" value="Pause" onClick={this.pause}/>
                <input type="button" value="Reset" onClick={this.reset}/>
                </div>

            </div>
        )
    }
}
