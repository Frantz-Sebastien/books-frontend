// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function ReviewForm(props) {
//   let { id } = useParams();
//   const { reviewDetails } = props;

//   const [review, setReview] = useState({
//     reviewer: "",
//     rating: "",
//     content: "",
//     book_id: id,
//   });

//   const handleTextChange = (event) => {
//     setReview({ ...review, [event.target.id]: event.target.value });
//   };

//   useEffect(() => {
//     if (reviewDetails) {
//       setReview(reviewDetails);
//     }
//   }, [id, reviewDetails, props]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.handleSubmit(review, id);
//     if (reviewDetails) {
//       props.toggleView();
//     }
//     setReview({
//       reviewer: "",
//       rating: "",
//       content: "",
//       book_id: id,
//     });
//   };

//   return (
    
//     <form className="" action="/action_page.php" onSubmit={handleSubmit}>
//     {/* <div className="form-inline form-group">
//       {props.children} */}

//       <div className="form-group">
//         <label htmlFor="name"
//                 className="sr-only">Name:</label>
        
//         <input   
//           id="reviewer"
//           className="form-control"
//           value={review.reviewer}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Your name"
//           required

//         />
//         </div>

//       <div className="form-group">
//         <label htmlFor="rating">Rating:</label>
//         <input
//           id="rating"
//           type="number"
//           placeholder="Add Review rating"
//           value={review.rating}
//           onChange={handleTextChange}
//         />
//       </div>
      
//         <label htmlFor="content">Review:</label>
//         <textarea
//           id="content"
//           type="text"
//           name="content"
//           value={review.content}
//           placeholder="What do you think..."
//           onChange={handleTextChange}
//         />

//         <br />

//         <input className="btn btn-primary mb-2" type="submit" />
//       </form>
//   );
// }

// export default ReviewForm;







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

  const handleRadioChange = (event) => {
    setReview({ ...review, rating: event.target.value });
  }


  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails]); //  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    // if (reviewDetails) {
    //   props.toggleView();
    // }
    setReview({
      reviewer: "",
      rating: "",
      content: "",
      book_id: id,
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>
    {/* <div className="form-inline form-group">
      {props.children} */}

      <div className="form-group">
        <label htmlFor="reviewer"
                className="sr-only">Name:</label>
        
        <input   
          id="reviewer"
          className="form-control"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required

        />
        </div>

      {/* <div className="">
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          className=""
          type="number"
          placeholder="Add Review rating"
          value={review.rating}
          onChange={handleTextChange}
        />
      </div> */}

        <fieldset className="rating">
          <input type="radio" id="star5" name="rating" value="5"checked={review.rating==="5"} onChange={handleRadioChange} /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
          <input type="radio" id="star4" name="rating" value="4"checked={review.rating==="4"} onChange={handleRadioChange} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
          <input type="radio" id="star3" name="rating" value="3"checked={review.rating==="3"} onChange={handleRadioChange} /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
          <input type="radio" id="star2" name="rating" value="2"checked={review.rating==="2"} onChange={handleRadioChange} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
          <input type="radio" id="star1" name="rating" value="1"checked={review.rating==="1"} onChange={handleRadioChange} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
        </fieldset>
      
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          className="form-control"
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