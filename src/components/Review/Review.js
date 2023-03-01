import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UseContext';
import ReviewCard from './ReviewCard';
import {  toast } from 'react-toastify';
import './Style.css'

const Review = () => {
  const {user} = useContext(AuthContext)
  const [review,setreview] = useState([])

  useEffect(()=>{
    fetch(`https://service-review-server-foysal0321.vercel.app/reviews?email=${user?.email}`)
    .then(res=> res.json())
    .then(data=>setreview(data))
  },[user?.email])

  const reviewDelete=(val)=>{
        const sure = window.confirm(`Are you sure ${val.serviceName}`)
        if(sure){
          fetch(`https://service-review-server-foysal0321.vercel.app/reviews/${val._id}`,{
            method: 'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount > 0){
              toast.success('Review Delete!', {
                position: toast.POSITION.TOP_CENTER
            });
            const remain = review.filter(v=> v._id !== val._id)
            setreview(remain)
            }
            
          })
        }
        
  }
    return (
        <div>
          {
            review ? 
           
            <div className="overflow-x-auto w-full reviewtable py-8">
              <h4 className='py-4 text-2xl '>Your reviews : {review.length}</h4>
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Service</th>
        <th>Email</th>
        <th>Review</th>
        <th>Delete / Update</th>
      </tr>
    </thead>
    <tbody>
      {
        review.map(r=> <ReviewCard  
          key={r._id}
          review={r}
          reviewDelete={reviewDelete}
        />)
      }      
    </tbody>
  </table>  
  </div>  :
  <h5>There is no review</h5> 
   }
        </div>
    );
};

export default Review;