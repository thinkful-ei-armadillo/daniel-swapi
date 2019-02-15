import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component {
  state = {
    results: []
  }

  handleResults = (result) => {
    this.setState({results: result})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Search!</h1>
        </header>
        <main>
          <ErrorBoundary>
          <SearchBar 
            results={this.handleResults}
            />
          <SearchResults
            results={this.state.results}
            />
          </ErrorBoundary>
          <img src={logo} className="App-logo" alt="logo" />
        </main>
      </div>
    );
  }
}

export default App;
