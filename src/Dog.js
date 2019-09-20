import React, { Component } from "react";
import "./Dog.css";

class Dog extends Component {
  render() {
    const { name, age, image, adoptable } = this.props.dog;
    return (
      <div className={adoptable ? "Dog Dog-adoptable" : "Dog"}>
        <h3>{name}</h3>
        <p>Age: {age} year(s)</p>
        <img className="Dog-image" src={image} alt={`${name} profile pic`} />
        <p>{name} is {adoptable ? "" : "not"} available for adoption!</p>
      </div>
    );
  }
}

export default Dog;
