import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import box1 from "../images/box1.jpg";
import box2 from "../images/box2.jpg";
import box3 from "../images/box3.jpg";
import styled from "styled-components";
import BenBox from "./BenBox";
import Ring from "./Ring";
import Divider from "@mui/material/Divider";
import BoxLightBox from "./BoxLightBox"; 
import BoxSchedule from "./BoxSchedule"; 
import "../App.css";
import Follow from "./follow";
import boxM from "../images/boxM.png";




const Card = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

function Boxing() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (index) => {
    if (index === 2) {
      // Assuming there are 3 slides (index 0, 1, 2)
      setTimeout(() => setActiveIndex(0), 2000); // Reset to the first slide after 2 seconds
    } else {
      setActiveIndex(index);
    }
  };

  const handleCarouselEnd = () => {
    // Restart the carousel by setting the activeIndex to 0
    setActiveIndex(0);
  };

  return (
    <div className="boxing" data-aos="fade-in">
      <h1>Boxing </h1>
      <br></br> 
      <p>
        The <strong>Benicia Boxing & Martial Arts </strong>
        boxing program is geared for everyone <strong> ages 12 and up </strong>
        and all levels of experience. We offer a highly organized training
        regimen that is oriented around your personal goals. Whether you’re
        looking to learn the basics, get fit, fight in the amateurs or go
        professional, we are confident that we can help you reach your goals. We
        offer both
        <strong> private </strong> and
        <strong> group </strong>
        training in a modern facility which is fully equipped with punching bags
        and a ring. We are also registered with USA Boxing.
      </p>
      <p>
        The goal at Benicia Boxing & Martial Arts is to instill a high level of
        confidence, discipline and effective boxing skills within every boxer we
        train. Sparring is optional
      </p>
      <br></br>
      <Divider data-aos="fade-in"></Divider>
      <br></br>
      <Carousel data-aos="fade-in"
        autoPlay
        interval={2500}
        showThumbs={false}
        showStatus={false}
        selectedItem={activeIndex}
        onChange={handleCarouselChange}
        onSlideEnd={handleCarouselEnd}
        transitionTime={500} // Add transition time for smoother transitions
      >
        <Card>
          <img src={box1} alt="Image 1" className="boxPic" />
        </Card>
        <Card>
          <img src={box2} alt="Image 2" className="boxPic" />
        </Card>
        <Card>
          <img src={box3} alt="Image 3" className="boxPic" />
        </Card>
      </Carousel>

      <Carousel 
        autoPlay
        interval={2500}
        showThumbs={false}
        selectedItem={activeIndex}
        onChange={handleCarouselChange}
        onSlideEnd={handleCarouselEnd}
        transitionTime={500} // Add transition time for smoother transitions
      >
        {/* Add content for the second carousel here */}
      </Carousel>

      <BenBox data-aos="fade-in"></BenBox>
      <BoxSchedule data-aos="fade-in"></BoxSchedule>
      <Card>
      <img src={boxM} alt="Image 1" className="boxPic" />

        </Card>
        <Follow/>



      <BoxLightBox data-aos="fade-in"> </BoxLightBox>
      <Ring data-aos="fade-in"></Ring>

    </div>
  );
}

export default Boxing;
