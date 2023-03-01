import React from 'react';
import './Style.css'
import {  toast } from 'react-toastify';

const Addservice = () => {
    const addService =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const price = form.price.value
        const rating = form.rating.value
        const info = form.info.value
        const values ={
            title: name,
            img: image,
            description: info,
            price: price,
            rating: rating
        }
        fetch(`https://service-review-server-foysal0321.vercel.app/allservices`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(values)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Service add success!', {
                    position: toast.POSITION.TOP_CENTER
                });
                  form.reset()
            }
        })
      
       // console.log(values);
    }
    return (
        <div>
            <div className="addform py-12">
            <form onSubmit={addService}>
            <h2 className='text-4xl'></h2>
            <h4 className='text-3xl py-4'>Add service</h4>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
           <input name='name' type="text" placeholder="Service name" className="input input-bordered w-full " required />
           <input name='image' type="text" placeholder="Service image url" className="input input-bordered w-full "  />
           <input name='price' type="text" placeholder="Price" className="input input-bordered w-full "  required/>
            <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full" required/>         
           </div>
           <textarea name='info' className="textarea textarea-bordered h-28 w-full" placeholder="Description" required></textarea>
           <button className="btn btn-success">Submit</button>
           </form>
            </div>
        </div>
    );
};

export default Addservice;