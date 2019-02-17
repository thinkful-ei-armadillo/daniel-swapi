import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  state = {
    term: '',
    type: ''
  }

  handleSearch = (searchTerm) => {
    console.log(searchTerm);
    this.setState({term: searchTerm});
  }

  handleSelect = (category) => {
    console.log(category);
    this.setState({type: category})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('search submitted!')
    // this.props.setLoading()

    const url = `https://swapi.co/api/${this.state.type}/?search=${this.state.term}`;

    fetch(url)
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
          placeholder="Search for something..."
          className="search-input"
          onChange={(e) => this.handleSearch(e.target.value)}
          required
          />
        <select className="select-search-type" onChange={(e) => this.handleSelect(e.target.value)} required>
          <option value=''>Category</option>
          <option value='people'>People</option>
          <option value='films'>Films</option>
          <option value='starships'>Starships</option>
          <option value='vehicles'>Vehicles</option>
          <option value='species'>Species</option>
          <option value='planets'>Planets</option>
        </select>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    )
  }
}
