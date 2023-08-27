import React, { useState } from 'react';
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const countingStars = (rating) =>{
    let stars = []
    for (let i= 1; i<=5; i++){
      if(i<=rating){
        stars.push(<span key={i} className='ratingStar'>&#9733;</span>)
      } else {
        stars.push(<span key={i} className='ratingStar'>&#9734;</span>)
      }
    }
    return stars
  }

  return (


<div className="">

{viewEditForm ? (
         <ReviewForm
         reviewDetails={review}
         toggleView={toggleView}
         handleSubmit={handleSubmit}
         />
        
         ):(

<div className="">

  <div className="">
    <div className="">

      <div className="">
        <div className="">
          <span><small className="">{review.reviewer}</small> <small className="">{review.content}</small></span>  
        </div>
      <small style={{color: 'green', fontSize: '18px', fontWeight:'bold'}}>{countingStars(review.rating)}</small>
      </div>


      <div className="">
        <div className="">
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

