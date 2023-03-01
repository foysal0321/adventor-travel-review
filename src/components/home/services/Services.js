import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Style.css'

const Services = () => {

    const [data,setdata] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        fetch(`https://service-review-server-foysal0321.vercel.app/services`)
        .then(res=> res.json())
        .then(d=> setdata(d))
        setloading(false)
    },[])
    //console.log(data);
    return (
        <div className="py-20 main-service">
            <div className="service-info text-center py-12">
                <h3 className='text-2xl py-2 text-success'>Select your activity</h3>
                <h1 className='text-4xl py-2 font-bold'>Explore Activities</h1> 
        </div>
        {
        loading && <p className='py-12 text-center'>
            <progress className="progress w-96"></progress>
        </p>
         }
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0  mt-12 services'>
            {
               data.map(s=> <Cart 
               key={s._id}
               service={s}
               />)
            }         
         </div>
         <div className="seemore py-8">
            <Link to='/services'>
            <button className='btn btn-outline w-52 lg:w-96'>See More</button>
            </Link> 
         </div>
           <div className="main py-10">
         <div className="text-center py-12">
           <h3 className='text-2xl py-2 text-success'>Value before business</h3>
            <h1 className='text-4xl py-2 font-bold'>We Offer the best</h1> 
         </div>
       
         <div className="section2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="section2-img">
                <img src="https://adventor.wpengine.com/wp-content/uploads/2021/07/image-caption-2.jpg" className='' alt="" data-aos="fade-left" />
            </div>
            <div className="section2-info " data-aos="fade-right">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="value py-0">
                    <h1>Various Adventures </h1>
                    <p>Tempor incididunt ut labore lore <br /> magna aliqua sem utna.</p>
                </div>
                <div className="value py-0">
                    <h1>Adventurous Trails</h1>
                    <p>Et dolore magna aliqua quis ipsum <br /> suspen disse ultrices.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="value py-5">
                    <h1>Trained Guides</h1>
                    <p>Quis ipsum suspendisse ultrices <br /> gravida risus viverra maecenas.</p>
                </div>
                <div className="value py-5">            
                    <h1>Family Trips</h1>
                    <p>Incididunt ut labore. Et dolore <br /> magna aliqua quis ipsum suspe.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="value py-6">
                    <h1>Custom Packages</h1>
                    <p>Et dolore magna aliqua quis ipsum <br /> suspendisse ultrices gravi</p>
                </div>
                <div className="value py-6">        
                    <h1>Complete Guide</h1>
                    <p>Tempor incididunt ut labore et dolore <br /> magna quis ipsum suspe</p>
                </div>
            </div>
         </div>
         </div>
        </div>

        <div className="hero " style={{ backgroundImage: `url("https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/01/Intrepid-Travel-Egypt-Cairo-pyramids-026.jpg")` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Traveling allows us to establish new relationships</h1>
      <p className="mb-5">One of the most important benefits of traveling is the opportunity to build friendships and connections with people from all around the world. Sharing our travel experiences with others is what makes it an enriching life experience.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Services;