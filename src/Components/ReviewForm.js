import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    rating: "",
    content: "",
    book_id: id,
  });

  const handleTextChange = (event) => {
    console.log('handling text change')
    console.log(event.target.value)
    console.log(review)
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  const handleRadioChange = (event) => {
    console.log('handling Change')
    console.log(event.target.value)
    console.log(review)
    setReview({ ...review, ['rating']: event.target.value });
  }


  useEffect(() => {
    console.log('Running useEffect function')
    if (reviewDetails) {
      setReview({...reviewDetails, rating: String(reviewDetails.rating),});
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      rating: "",
      content: "",
      book_id: id,
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="reviewer"
          className="sr-only"></label>
        
        <input 
          id="reviewer"
          className="form-control"
          style={{ width: "50%" }}
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required

        />

      
        <label htmlFor="content"></label>
        <textarea
          id="content"
          className="form-control"
          style={{ width: "50%" }}
          type="text"
          name="content"
          value={review.content}
          placeholder="Add a comment..."
          onChange={handleTextChange}
          />
          </div>

          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5"checked={review.rating==="5"} onChange={handleRadioChange} /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4"checked={review.rating==="4"} onChange={handleRadioChange} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3" name="rating" value="3"checked={review.rating==="3"} onChange={handleRadioChange} /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2" name="rating" value="2"checked={review.rating==="2"} onChange={handleRadioChange} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1" name="rating" value="1"checked={review.rating==="1"} onChange={handleRadioChange} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
          </fieldset>
        <br />
        <br />

        <input className="btn btn-primary mb-2" type="submit" />
      </form>
  );
}

export default ReviewForm;