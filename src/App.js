import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // Access from Class Component, when page mounts (loaded)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // arrow functions get lexial scoping which is taking care of the bind(this)
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // const monsters = this.state.monsters
    const { monsters, searchField } = this.state;
    const filiteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filiteredMonsters} />
      </div>
    );
  }
}

export default App;
