import { useState } from 'react';
import './HomePageCarousel.css';
import pic from "../../assets/pic1.jpg"

import React from 'react'

const HomePageCarousel = () => {

      const [currentSlide, setCurrentSlide] = useState(0);
      const totalSlides = 5;
    
      const nextSlide = () => {
        console.log("Next Slide")
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
      };

  return (
    <>
      <div className="chevron-container">
        <button onclick={prevSlide} className='chevron-button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-left"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <button onclick={nextSlide} className='chevron-button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-right"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <button class="carousel-button" onClick={console.log("Explored Services")}>Explore</button>

      <section class="carousel-container" id="carousel">
        <div class="carousel-container-inner">
          <div class="carousel-container-item">
            <img src={pic} alt="" class="carousel-image" />
            <div class="carousel-text text-right">
              <header className="header-orange">Process Optimization</header>
              <p>
                <br />We streamline logistics processes to boost performance. By pinpointing bottlenecks and applying 
                targeted strategies, we help your business excel in a competitive setting.<br /><br />Think of us 
                as the tune-up for your operational machine.
              </p>
            </div>
          </div>
          <div class="carousel-container-item">
            <img src={pic} alt="" class="carousel-image" />
            <div class="carousel-text">
              <header>Technology Integration</header>
              <p>Cutting-edge solutions for optimized logistics operations</p>
            </div>
          </div>
          <div class="carousel-container-item">
            <img src={pic} alt="" class="carousel-image" />
            <div class="carousel-text">
              <header>Training & Skill Development</header>
              <p>Customized programs to empower your workforce.</p>
            </div>
          </div>
          <div class="carousel-container-item">
            <img src={pic} alt="" class="carousel-image" />
            <div class="carousel-text">
              <header>Warehouse Design & Layout</header>
              <p>Maximize Space and improve operational flow</p>
            </div>
          </div>
          <div class="carousel-container-item">
            <img src={pic} alt="" class="carousel-image" />
            <div class="carousel-text">
              <header>Sustainabilty Initiatives</header>
              <p>Green solutions for a reduced environment impact</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



// carousel.js


// const Carousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const slides = [
//         {
//             image: { pic },
//             dummyData: {
//                 header: 'Slide 1',
//                 text: 'This is some dummy data for slide 1.',
//             },
//         },
//         {
//             image: { pic },
//             dummyData: {
//                 header: 'Slide 2',
//                 text: 'This is some dummy data for slide 2.',
//             },
//         },
//         {
//             image: { pic },
//             dummyData: {
//                 header: 'Slide 3',
//                 text: 'This is some dummy data for slide 3.',
//             },
//         },
//         {
//             image: { pic },
//             dummyData: {
//                 header: 'Slide 4',
//                 text: 'This is some dummy data for slide 4.',
//             },
//         },
//         {
//             image: { pic },
//             dummyData: {
//                 header: 'Slide 5',
//                 text: 'This is some dummy data for slide 5.',
//             },
//         },
//     ];

//     const handleNextSlide = () => {
//         setCurrentSlide((currentSlide + 1) % slides.length);
//     };

//     const handlePreviousSlide = () => {
//         setCurrentSlide((currentSlide - 1) % slides.length);
//     };

//     const renderSlide = () => {
//         const slide = slides[currentSlide];

//         return (
//             <div className="carousel-slide">
//                 <img className="carousel-image" src={slide.image} />
//                 <div className="carousel-dummy-data">
//                     <h2>{slide.dummyData.header}</h2>
//                     <p>{slide.dummyData.text}</p>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="carousel">
//             <div>
//                 <button onClick={handlePreviousSlide}>Previous</button>
//                 <button onClick={handleNextSlide}>Next</button>
//             </div>
//             {renderSlide()}
//         </div>
//     );
// };

// export default Carousel;

// src/Carousel.js

// import React, { useState } from 'react';
// import './HomePageCarousel.css'; // Import CSS file for styling

// const HomePageCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 5;

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className="carousel">
//       {Array.from({ length: totalSlides }).map((_, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentSlide ? 'active' : ''}`}
//           style={{ backgroundImage: `url("image_${index + 1}.jpg")` }}
//         >
//           <div className={`content ${index % 2 === 0 ? 'left' : 'right'}`}>
//             <h2>Slide {index + 1}</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       ))}
//       <button onClick={prevSlide} className="nav-button prev">
//         Previous
//       </button>
//       <button onClick={nextSlide} className="nav-button next">
//         Next
//       </button>
//     </div>
//   );
// };

export default HomePageCarousel;
