import React from "react";
import Offer from "./Offer";
import Follow from "./follow"
import { Link } from 'react-router-dom';
import ken5 from "../images/ken5.jpg";
import Testimonial from "./Testimonial";
import "./testimonial.css";
import LazyLoad from "react-lazyload";
import { Card, CardMedia, CardHeader } from "@mui/material";
import box8 from "../images/box8.jpg";

function About() {
  return (
    <div className="about">
      <div className="aboutWrap" data-aos="fade-in">
        <h1>Our Philosophy</h1>
        <br></br>

        <p className="flex" data-aos="fade-in">
          <strong> Benicia Boxing & Martial Arts </strong> is the best training
          facility for the fighting arts{" "}
          <i>(Boxing, Kenpo-Karate, & Balintawak Arnis)</i>. What makes us the
          best? We teach not for the purpose of creating tournament fighters and
          trophy winners. We teach for the purpose of helping people. There is
          an old saying, “it does not take a good instructor to teach an easy
          student, but it takes a great instructor to teach a difficult
          student.”
        </p>
        <p>
          There is an unwritten policy in some schools or gyms throughout the
          world to screen all potential students. This “screening” Process
          consists of sparring with one of the top students or boxers, and
          getting seriously beaten and hurt. Those who could not take this
          beating would not show up for their next training session, thereby
          insuring that only the toughest, most confident fighters make it.
        </p>

        <p>
          At <strong> Benicia Boxing & Martial Arts </strong> we have exactly
          the opposite mission. We pride ourselves on being able to teach and
          train people who may not be natural athletes or fighters. We feel this
          is a mark of a good instructor or coach. A coach who can take a
          disabled person, a rebellious teenager or a timid child and make a
          confident, self-assured, skilled fighter out of him or her is an
          example. Come experience the best!
        </p>
        <br></br>

        <Offer data-aos="fade-in"/>
        <br></br>
        <Link to="/boxing" style={{ textDecoration: 'none' }}>

          <Card data-aos="fade-in">
            <CardHeader
              title="Boxing"
              titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
            />

            <CardMedia
              component="img"
              height="140"
              image={box8}
              alt="boxing"
              className="centered-image"
            ></CardMedia>
          </Card>
        </Link>
        
        <br></br>
        <Link to="/karate" style={{ textDecoration: 'none' }}>
        <Card data-aos="fade-in">
          <CardHeader
            title="Martial Arts"
            titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
          />

          <CardMedia
            component="img"
            height="140"
            image={ken5}
            alt="boxing"
            className="centered-image"
          ></CardMedia>
        </Card>
        </Link>
        <br></br>
        <Follow data-aos="fade-in"/>
        <br></br>

        <Testimonial className="testCard" data-aos="fade-in"/>
      </div>
    </div>
  );
}

export default About;
