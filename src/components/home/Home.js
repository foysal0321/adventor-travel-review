import React from 'react';
import Services from './services/Services';
import Slider from './slider/Slider';
import './Style.css'
const Home = () => {
    return (
        <div className=''>
            <Slider />
            <div className="travel-tour ">
                <div className=" tour-info-color">
                <div className="tour-info mx-5 lg:mx-52">
                    <div className="tour-details text-center py-4" data-aos="fade-down">
                    <h2 className='py-3'>About Company</h2>
                    <h1 className='py-0'>Travel Tours</h1>
                    <p className='py-3'>One of the most important benefits of traveling is the opportunity to build friendships and connections with people from all around the world. Sharing our travel experiences with others is what makes it an enriching life experience.</p>
                    <button className='btn btn-outline mt-2 text-white'>Lern more</button>
                    </div>
                </div>
                </div>
                <img src="" alt="" />
                <div className="tour-img mx-12 lg:mx-0" data-aos="fade-up">
                    <div className="imgs">
                <img src="https://www.esikkimtourism.in/wp-content/uploads/2019/10/sikkim-tour-in-april.jpg" alt="" />
                <img src="https://imgcld.yatra.com/ytimages/image/upload/v1436339077/Goa_104.jpg" alt="" />
                    </div>
                <div className="imgs">
                    <img src="https://media.istockphoto.com/id/1156492509/photo/woman-near-nung-nung-waterfal-on-bali-indonesia.jpg?s=612x612&w=0&k=20&c=O6x4rEyJusX9LI9biqrA141KxMfiynJ3EtG7u3595Jo=" alt="" />
                <img src="https://www.traveloffpath.com/wp-content/uploads/2022/05/Happy-Young-Female-Traveler-Enjoying-A-Long-Tail-Boatride-In-Thailand-1.jpg" alt="" />
                </div>              
                </div>
            </div>
            <div className="main-section activities-section">
            <div className="section py-0">
                <div className="section-info " data-aos="fade-right">
                    <h1>Making Adventure tours, <br /> activities affordable.</h1> <hr />
                    <p>Find an adventure, create a hobby that is related to nature in its vert pristiene shape for your goodness. Tempor incididunt ut labore. Et dolore magna aliqua. Quitts ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className="section-img" data-aos="fade-left">
                    <img src="https://www.cbd.int/sites/default/files/2021-07/mountain_tourist_2.jpg" alt="" />
                </div>
            </div>
            </div>
            <Services />
        </div>
    );
};

export default Home;