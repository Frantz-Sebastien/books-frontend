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
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
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
    
    <form className="form-inline addReview" action="/action_page.php" onSubmit={handleSubmit}>
    {/* <div className="form-inline form-group">
      {props.children} */}

      <div className="form-group mb-2">
        <label htmlFor="staticName2"
                className="sr-only">Name:</label>
        
        <input   
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required

        />
        </div>

      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          placeholder="Add Review rating"
          value={review.rating}
          onChange={handleTextChange}
        />
      </div>
      
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input className="btn btn-primary mb-2" type="submit" />
      </form>
  );
}

export default ReviewForm;