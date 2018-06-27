// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const SEARCHURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}?api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const SEARCHURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${NYT_API_KEY}`
    fetch(SEARCHURL)
      .then(r => r.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Search Movie Reviews"/>
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
