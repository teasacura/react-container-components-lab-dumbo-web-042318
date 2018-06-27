import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  updateMovieReviews = () => {
    fetch(URL)
      .then(r => r.json())
      .then(r => this.setState({reviews: r.results}, () => console.log(this.state)) )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <button onClick={this.updateMovieReviews}>Get Latest Movie Reviews</button>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }

}

export default LatestMovieReviewsContainer;
