import React, { Component } from 'react';

import { CardList } from './components/CardList';

import './App.css';
import { SearchBox } from './components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  render() {
    const { monsters,  searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox 
        type='search'
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
