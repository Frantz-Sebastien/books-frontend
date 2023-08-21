import React, { useState } from 'react';
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (

<div className="container mt-5">

{viewEditForm ? (
         <ReviewForm
         reviewDetails={review}
         toggleView={toggleView}
         handleSubmit={handleSubmit}
         />
        
         ):(

<div className="row  d-flex justify-content-center">

  <div className="col-md-8">
    <div className="card p-3">

      <div className="d-flex justify-content-between align-items-center">
        <div className="user d-flex flex-row align-items-center">
          <span><small className="font-weight-bold text-primary">{review.reviewer}</small> <small className="font-weight-bold">{review.content}</small></span>  
        </div>
      <small style={{color: 'green', fontSize: '18px', fontWeight:'bold'}}>{review.rating}</small>
      </div>


      <div className="action d-flex justify-content-between mt-2 align-items-center">
        <div className="remove-edit">
            <small onClick={() => handleDelete(review.id)}> Remove</small>
            <span className="dots"></span>
            <small onClick={toggleView}>Edit</small>
        </div>   
      </div>

    </div>

  </div>
    
</div>)}
         
</div>
  );
}
  
export default Review;