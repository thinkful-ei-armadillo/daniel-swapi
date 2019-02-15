import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import ErrorBoundary from './ErrorBoundary';
import Loading from './Components/Loading';
import './App.css';

class App extends Component {
  state = {
    results: [],
    loading: false
  }

  handleResults = (result) => {
    this.setState({results: result})
  }

  handleLoading() {
    console.log('handleLoading triggered!')
    console.log(this.loading)
    this.setState({loading: !this.loading})
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
              loading={this.state.loading}
              setLoading={this.handleLoading}
              />
            <Loading
              loading={this.state.loading}
              />
            <SearchResults
              results={this.state.results}
              loading={this.state.loading}
              setLoading={this.handleLoading}
              />
          </ErrorBoundary>
        </main>
      </div>
    );
  }
}

export default App;
