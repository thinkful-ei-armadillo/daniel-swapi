import React from 'react';
import './SearchResults.css';

export default class SearchResults extends React.Component {
  
  render() {
    // this.props.setLoading()
    if (this.props.results.length === 0) {
      return (<section className="SearchResults">
      <p>Unfortunately, it appears that there are no results for that search.</p>
      <p>Please try a new search term!</p>
    </section>)
    }
    return (
      <section className="SearchResults">
        <ul>
          {this.props.results.map(result => {
            return (
            <li key={result.url}>
              <h2>{result.name}</h2>
              <h4>Born: {result.birth_year}</h4>
              <p>
              {result.name} has appeared in {result.films.length} films in the Star Wars universe. 
              </p>
            </li>
            )
          })}
        </ul>
      </section>
    )
  }
}