import React from 'react';
import './SearchResults.css';

export default class SearchResults extends React.Component {
  render() {
    return(
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