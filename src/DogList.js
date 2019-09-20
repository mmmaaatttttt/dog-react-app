import React, { Component } from "react";
import Dog from "./Dog";
import NewDogForm from "./NewDogForm";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [
        {
          name: "Whiskey",
          age: 6,
          image:
            "https://scontent-lax3-1.cdninstagram.com/vp/bf477169c5ffbd0527b55dbc86ff2ff3/5E3B24B1/t51.2885-15/e35/51188351_630582084045159_7876248144914958030_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103",
          adoptable: false,
          editing: false
        }
      ]
    };
    this.addDog = this.addDog.bind(this);
    this.editDog = this.editDog.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  addDog(newDog) {
    this.setState(st => ({
      dogs: [...st.dogs, { ...newDog, editing: false }]
    }));
  }

  editDog(idx, editedDog) {
    this.setState(st => ({
      dogs: st.dogs.map((dog, dogIdx) => {
        if (idx === dogIdx) {
          return { ...editedDog, editing: false };
        }
        return dog;
      })
    }));
  }

  toggleEdit(idx) {
    this.setState(st => ({
      dogs: st.dogs.map((dog, dogIdx) => {
        if (idx === dogIdx) {
          return { ...dog, editing: !dog.editing };
        }
        return dog;
      })
    }));
  }

  render() {
    return (
      <div>
        Look at all of these dogs!!!
        <NewDogForm handleAdd={this.addDog} />
        {this.state.dogs.map((dog, idx) => (
          <Dog dog={dog} idx={idx} toggleEdit={this.toggleEdit} editDog={this.editDog} />
        ))}
      </div>
    );
  }
}

export default DogList;
