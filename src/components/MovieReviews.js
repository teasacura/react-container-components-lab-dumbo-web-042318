// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  console.log(reviews)
  if (reviews === undefined) {
    return <p>Nothing to show here</p>
  } else {
    return (<ul>
      {reviews.map(review =>
        <li className="review">
          <p>Title: {review.display_title}</p>
          <p>MPAA Rating: {review.mpaa_rating}</p>
          <p>{review.headline}</p>
        </li>
      )}
    </ul>
  )
  }

}


export default MovieReviews;
