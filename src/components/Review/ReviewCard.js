import React from 'react';

const ReviewCard = ({review, reviewDelete}) => {
//  console.log(review);

    const updateReview=(val)=>{
        val.preventDefault()
        const message = val.target.message.value
        const review={
          message : message
        }
        //console.log(val._id);
        
        fetch(`https://service-review-server-foysal0321.vercel.app/reviews/${val._id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=>{
          if(data.acknowledged){
            alert('ok')
            console.log(data);
          }
        })
        .catch(err=>{
          console.log(err);
        })
    }
 
    return (
        <>

            <tr>      
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={review.image} />
              </div>
            </div>
            <div>
              <div className="font-semibold">{review.coustomerName}</div>
            </div>
          </div>
        </td>
        <td>{review.serviceName} </td>
        <td>{review.email}</td>
        <td>{review.message}</td>
        <td>
          <button onClick={()=> reviewDelete(review)} className="btn btn-warning btn-xs">Delete</button>
          {/* update modal */}
           <label  htmlFor="my-modal-5" className="btn btn-secondary btn-xs mx-2">Update</label>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
          
        {/* update review form */}
        <form onSubmit={() =>updateReview(review)}>
            <h2 className='text-2xl'>  {review.serviceName}</h2>
            <h4 className='text-xl mt-3'>Your review update :</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">        
            </div>
            <textarea  defaultValue={review.message}  name='message' className="textarea textarea-bordered h-28 w-full" placeholder="Review Content"></textarea> <br />
            <button  className="btn btn-success">Submit</button>
        </form>
    <div className="modal-action">   
      <label htmlFor="my-modal-5" className="btn">Close</label>
        </div>
            </div>
          </div>
        </td>     
      </tr>   
    </>     
    );
};

export default ReviewCard;