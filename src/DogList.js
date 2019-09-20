import React, { Component } from "react";
import Dog from "./Dog";

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
          adoptable: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        Look at all of these dogs!!!
        {this.state.dogs.map(dog => (
          <Dog dog={dog} />
        ))}
      </div>
    );
  }
}

export default DogList;
