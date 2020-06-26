import React, { Component } from "react";

import { CardList } from "./components/CardList/CardList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5ef62fc997cb753b4d185b77")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        this.setState({ users: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.full_name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="page-title">Insta Influencers</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
