import React, { useEffect } from 'react';
import './Slider.css'
import water from './water.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Slider = () => {

  useEffect(()=>{
    Aos.init({duration: 900})
  },[])
  
    return (
        <div>
            
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full video-item">
  <div className="info">
        <h3 data-aos="fade-down">Discover the</h3>
        <h1 data-aos="fade-right">Adventure Travel</h1>
        <p >Your best Adventure Deals with nature.</p>
        <button data-aos="fade-up"  className='btn btn-success mt-6 text-white'>View Adventures</button>
    </div>
    <div className="mp4">
      <video src={water} 
        autoPlay loop muted plays-inline className='black-video'>     
     </video>
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full item1">
  <div className="info text-center">
        <h3>Discover the</h3>
        <h1>Adventure Travel</h1>
        <p>Your best Adventure Deals with nature.</p>
        <button className='btn btn-success mt-6'>View Adventures</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full item3">
    <div className="info">
        <h3>Discover the</h3>
        <h1>Adventure Travel</h1>
        <p>Your best Adventure Deals with nature.</p>
        <button className='btn btn-success mt-6'>View Adventures</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">    
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;