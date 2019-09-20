import React, { Component } from "react";
import EditDogForm from "./EditDogForm";
import "./Dog.css";

class Dog extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleEdit(this.props.idx);
  }

  render() {
    const { name, age, image, adoptable, editing } = this.props.dog;
    return (
      <div className={adoptable ? "Dog Dog-adoptable" : "Dog"}>
        {editing ? (
          <EditDogForm
            dog={this.props.dog}
            idx={this.props.idx}
            editDog={this.props.editDog}
          />
        ) : (
          <div>
            <h3>{name}</h3>
            <p>Age: {age} year(s)</p>
            <img
              className="Dog-image"
              src={image}
              alt={`${name} profile pic`}
            />
            <p>
              {name} is {adoptable ? "" : "not"} available for adoption!
            </p>
            <button onClick={this.handleClick}>Edit this dog!</button>
          </div>
        )}
      </div>
    );
  }
}

export default Dog;
