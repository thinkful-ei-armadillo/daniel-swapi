import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  state = {
    term: ''
  }

  handleSearch = (searchTerm) => {
    console.log(searchTerm);
    this.setState({term: searchTerm});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('search submitted!')
    // this.props.setLoading()

    fetch(`https://swapi.co/api/people/?search=${this.state.term}`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json();
      })
      .then(res => {
        this.setResults(res.results);
      })
      .catch(err => alert(err.message))
  }

  setResults = (results) => {
    this.props.results(results);
  }

  render () {

    return (
      <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Search for a character..."
          className="search-input"
          onChange={(e) => this.handleSearch(e.target.value)} 
          required
          />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    )
  }
}