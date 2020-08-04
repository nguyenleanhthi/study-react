import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  componentDidMount() {
    console.log();
  }

  render() {
    const value = this.refs.name1 ? this.refs.name1.value : 1;
    console.log(value);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref="name1" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
