import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reviews } from "./Reviews";
import "./testimonial.css";
import Quote from '../images/blockquote.svg';



const Testimonial = () => {
  return (

    // Displaying the reviews using Splide slider
    <div className="testimonial-container">
      <div className="title">
        <h2>What People are saying</h2>
        <br></br>
      </div>

      <div className="slider-container">
        
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>
        
        
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
            breakpoints: {
              768: {
                arrows: false, // Hide arrows on screens smaller than 768px
              },
              480: {
                arrows: false, // Hide arrows on screens smaller than 480px
              },
            },            

          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* MUI DataGrid to display tabular review data */}
     
    </div>
  );
};

export default Testimonial;
