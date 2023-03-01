import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';
import './Style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {  toast } from 'react-toastify';

const Details = () => {

    const data = useLoaderData()
    const {user} = useContext(AuthContext)
    const [userReview,setUserreview] = useState([])
    const [reviewData,setreviewdata] = useState([])

    useEffect(()=>{
        fetch(`https://service-review-server-foysal0321.vercel.app/reviews?email=${user?.email}`)
        .then(res=> res.json())
        .then(d=> setreviewdata(d))
    },[user?.email, reviewData])

    useEffect(()=>{
        fetch(`https://service-review-server-foysal0321.vercel.app/reviews`)
        .then(res=> res.json())
        .then(d=> setUserreview(d))
    },[userReview])

    const review=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const rating = form.rating.value
        const message = form.message.value

        const reviewInfo={
            service_id : data._id,
            serviceName : data.title,
            price: data.price,
            coustomerName: name,
            email: email,
            image: image,
            rating: rating,
            message: message
        }
        fetch(`https://service-review-server-foysal0321.vercel.app/reviews`,{
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(reviewInfo)
        })
        .then(res=>  res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Service add success!', {
                    position: toast.POSITION.TOP_CENTER
                });
                  form.reset()
            }
        })
        .catch(err=>{
            console.log(err);
        })
       // console.log(reviewInfo);
    }

    //animation
   useEffect(()=>{
    Aos.init({duration: 900})
  },[])

    return (
        <div>
            <div className="details  gap-5 shadow-sm mt-10">
                <img src={data.img} className='' alt="Album" data-aos="fade-down"/>
                <div className="details-info" data-aos="fade-up">
                     <h2 className="text-3xl font-semibold py-4">{data.title}</h2>
                       <p className='py-3 font-normal'>{data.description}</p>
                       <p className='font-semibold py-4 text-2xl '>$ {data.price}</p>
                       <p className='font-semibold py-2 text-1xl '> Rating : 8</p>
                       <Link to='/services'><button className="btn btn-primary mt-4">Back Services</button></Link>
                </div>
            </div>       
                <h2 className='text-2xl py-4 font-semibold p-12'>Client review</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3 p-3 lg:p-12">
             <div className="card w-80 bg-slate-700 text-white shadow-sm userreview">  
                     <div className="flex">       
                    <img className='h-20 w-20' src='https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg' alt="" />    
                    <h2 className="card-title ml-3">
                    Jhon Doe <br />
                    doe@gmail.com 
                    </h2>
                 <p></p>
           </div> 
        <div className="card-body">        
          <h4 className='text-xl'>Excellent customer service. was very friendly, patient and helpful in helping us find what we were looking for. </h4>           
         </div>          
            </div>
            {
                   reviewData.map(d=> <div className=''>
                    {
                     data._id === d.service_id  ?                     
                     <div className="card w-80 h-80  bg-slate-700 text-white shadow-sm userreview">  
                     <div className="flex">       
                    <img src={d.image} alt="" />    
                    <h2 className="card-title ml-3">
                    {d.coustomerName} <br />
                    {d.email}
                    </h2>
                 <p></p>
           </div> 
        <div className="card-body">        
          <h4 className='text-xl'>{d.message}</h4>           
         </div>          
            </div>
                        : 
                        ''
                    }
                                             
                </div>)
            }
                </div>
            
            
        {
            user ? 
      
  <div className='py-5 reviewform' data-aos="fade-down">
           <form onSubmit={review}>
            <h2 className='text-4xl'></h2>
            <h4 className='text-3xl py-4'>Your review write here_</h4>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
           <input name='name' type="text" placeholder="Name" className="input input-bordered w-full " defaultValue={user?.displayName} readOnly/>
            <input name='email' type="text" placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full "  />
           <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full " required />
           <input name='image' type="text" placeholder="Image" className="input input-bordered w-full " defaultValue={user?.photoURL} readOnly />
           </div>
           <textarea name='message' className="textarea textarea-bordered h-28 w-full" placeholder="Review Content" required></textarea>
           <button className="btn btn-success">Submit</button>
           </form>
        </div>
        :
        <div className="py-16 text-center">
            <h4 className='text-2xl font-semibold'>Please <Link to='/login'> <button className='btn btn-sm btn-secondary'>Log in</button></Link>  To Add a  Review
            </h4>
        </div>
          }
        </div>
    );
};

export default Details;