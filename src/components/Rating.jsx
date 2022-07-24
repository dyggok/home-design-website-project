import React from "react";
import ReactStars from "react-rating-stars-component";

function Rating(props){
  const {averageRating} = props;

  return(<>
    <ReactStars
      count={5}
      size={20}
      edit={false}
      value={averageRating}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  </>)
}

export default Rating;