import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Style.css'

const AllServices = () => {
    const [data,setdata] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        fetch(`https://service-review-server-foysal0321.vercel.app/allservices`)
        .then(res=> res.json())
        .then(d=> setdata(d))
        setloading(false)
    },[])

    return (
        <div>
    <PhotoProvider>
    <div className="service-info text-center py-12">
            <h3 className='text-2xl py-2 text-success'>Select your activity</h3>
            <h1 className='text-4xl py-2 font-bold'>Explore Activities</h1> 
        </div>
        {
        loading && <p className='py-12 text-center'>
            <progress className="progress w-96"></progress>
        </p>
         }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 py-3 mt-12 services'>            
            {
               data.map(s=> <div key={s._id}>
                <div className="card w-80 lg:w-96 md:w-96 bg-base-100 shadow-lg m-3 allservices">                  
                        <PhotoView key={s._id} src={s.img}>
                          <img src={s.img} alt="" />   
                        </PhotoView>                       
                    <div className="card-body">
                    <h2 className="card-title">
                {s.title}
                    <div className="badge badge-primary">NEW</div>
                    </h2>
                     <h4 className='text-2xl'>$ {s.price}</h4>
                     <p>Rating : 07</p>
                    <p>
                    {s.description.slice(0,100)}
                    .. <Link to={`/services/${s._id}`}><button className="btn btn-xs">view details</button></Link> </p>    
                    </div>
                    
             </div>
               </div>)
            }
           
            </div>
</PhotoProvider>
        </div>
    );
};

export default AllServices;