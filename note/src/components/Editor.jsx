import React, { Component } from 'react'
import Reset from "../assets/Reset.png"

export default class EditorClass extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

  handleChange(e){
    this.setState({value: e.target.value});
    }

    render() {
        return (
        <div className="container">
            <div className="input">
                <h3>Input</h3>
                <img src={Reset} id='reset' onClick={() => {
                    this.setState({value: ''})
                    document.querySelector(".input-text").value = ""
                    }}/>
                <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
            </div>
            <div className="output">
                <h3>Pro Note</h3>
                <div className="output-text">{this.state.value}</div>
            </div>                
        </div>
        )
    }
}