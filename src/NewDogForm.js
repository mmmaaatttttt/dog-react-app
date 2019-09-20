import React, { Component } from "react";

class NewDogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      image: "",
      adoptable: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdoptable = this.handleAdoptable.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleAdoptable(evt) {
    this.setState({
      adoptable: evt.target.checked
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({
      name: "",
      age: 0,
      image: "",
      adoptable: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="number"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        <input
          type="checkbox"
          name="adoptable"
          onChange={this.handleAdoptable}
          checked={this.state.adoptable}
        />
        <button>Add Dog!</button>
      </form>
    );
  }
}

export default NewDogForm;
