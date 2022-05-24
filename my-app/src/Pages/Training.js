import React, { Component } from "react";
import Fcomponent from "../Components/Fcomponent";
import Fncomponent from "../Components/Fncomponent";

export default class Training extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="mainTraining">
        <h5>Controled Input</h5>
        <h3>{this.state.input}</h3>

        <Fcomponent
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <Fncomponent input={this.state.inputValue} />
      </div>
    );
  }
}
