import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className="first-side">
        <h1>Discover the World of Nike Footwear</h1>
        <p>Welcome to the official Nike Shoe brand page, where innovation meets style, and performance merges with fashion. At Nike, we believe that everyone has an athlete within them, and our mission is to empower individuals to unleash their full potential. Our footwear collection is not just about shoes; it's about a lifestyle, a culture, and a passion for excellence.</p>
        <p>Also availabe on :﹚ </p>
        <div className="img-buy">
        <img src="/images/flipkart.png" className='img' alt="" />
        <img src="/images/amazon.png" className='img' alt="" />
        </div>
      </div>
      <div className="second-side">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  )
}

export default Hero;
