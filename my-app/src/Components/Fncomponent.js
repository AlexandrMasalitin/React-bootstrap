import React, { Component } from 'react'

export default class Fcomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  



  render() {
    return (
      <div> 
          <h1>Render Input</h1>
          <p >{this.props.input} </p>
      </div>
    )
  }
}
