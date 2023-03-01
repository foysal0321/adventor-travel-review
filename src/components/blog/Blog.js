import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog-header text-white">
                <div className="header-info ">
                    <h1 className='text-3xl font-bold py-5 mx-2 lg:mx-20'>Some Features of the Experience of Travel : </h1>
                    <p className='mx-2 lg:mx-20'> . The Nervous Excitement  </p> <br />
                       <p className='mx-2 lg:mx-20'>. The Freedom </p> <br />
                       <p className='mx-2 lg:mx-20'> . The Independence</p>    <br />
                       <p className='mx-2 lg:mx-20'> . The Good Samaritans </p><br />
                      <p className='mx-2 lg:mx-20'> . The Newfound Self-Awareness</p>  <br />
                       <p className='mx-2 lg:mx-20'> . The Sublime and Ridiculous</p> <br />
                       <p className='mx-2 lg:mx-20'> . The Culture Shock</p>
                  
                </div>
                <img src="https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1568893963176-KEYCYS0OZHDLOQR3PLDJ/mehammocksilhouette-min.jpg?format=1000w" alt="" />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 blog py-14">
            <img src="https://static.wixstatic.com/media/36e5e9_96ae51fc64a94ba892390983500be27c~mv2.webp" alt="" />
            <div className="blog-info">
                <h2 className='text-2xl font-medium '>Why travel is important to build life experiences</h2> <hr />
                <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living. We could never experience these things at home. This is why travel is such a unique and invaluable life experience. Besides, there are many benefits of traveling, such as improved health and learning new skills. And as we learn and benefit from traveling, we feel more purpose in our lives. This article focuses on why traveling is important in building our life experiences. </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 blog py-14">          
            <div className="blog-info">
                <h2 className='text-2xl font-medium '>Traveling gives us a better understanding of the world</h2> <hr />
                <p>If you remain in your home town or country for your whole life, it is hard to fully comprehend the world. You will never get to experience other countries’ struggles, celebrations, and traditions. 
                <br /> <br />
                You can argue that the media does show you these things. However, the media often portrays the negatives of a country, while the positive stories go unreported. Think about the war in Syria and how your current perceptions of the people and the country are. The media enables us to build walls and barriers to understanding. The only way to overcome this is to explore and see things for ourselves in the real world. 
             </p>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1568894097440-P7OZ2VHRI3AW5PDKMHS4/3sisters2-min.jpg?format=1000w" alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 blog py-14">  
            <img src="https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1568894061503-RYTZ6MHWDE1M2788ZQ8H/Greeceviewpeople-min.JPG?format=1000w" alt="" />    
            <div className="blog-info">
                <h2 className='text-2xl font-medium '>Traveling allows us to establish new relationships</h2><hr />
                <p>One of the most important benefits of traveling is the opportunity to build friendships and connections with people from all around the world. Sharing our travel experiences with others is what makes it an enriching life experience. 
                <br /> <br />
                We usually don’t meet many new people at home. We already have our close group of friends and family, so there is no real need to get out and meet new people. This means that we are typically less open to new relationships. 
             </p>
            </div>
           
          </div>
        </div>
    );
};

export default Blog;