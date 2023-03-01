import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Style.css'

const Cart = ({service}) => {
    return (    
        <div className="card w-80 lg:w-96 md:w-96 bg-base-100 shadow-lg m-3">
          <PhotoProvider >
            <PhotoView key={service._id} src={service.img}>
            <img src={service.img} alt="" 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"/>  
            </PhotoView>                
        <div className="card-body">
          <h2 data-aos="fade-down" className="card-title  font-bold">
           {service.title}
        <div className="badge badge-primary">NEW</div>
          </h2>
          <h4 className='text-2xl font-semibold'> $ {service.price}</h4>
          <p>Rating : 07</p>
          <p>
        {service.description.slice(0,100)}
        .. <Link to={`/services/${service._id}`}><button className="btn btn-xs">view details</button></Link> </p>    
        </div>
        </PhotoProvider>
      </div>
    );
};

export default Cart;