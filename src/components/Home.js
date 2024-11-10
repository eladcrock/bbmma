import React from "react";
import { Divider } from "@mui/material";
import Offer from "./Offer";
import Follow from "./follow";
import "../App.css";
import { Card, CardMedia, } from "@mui/material";
import boxG1 from "../images/boxG1.png";
import ken23 from "../images/ken23.png";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome All</h1>
      <br></br>
      <p>
        <strong> Benicia Boxing & Martial Arts </strong> offers training for
        men, women and children of all ages. Whether you’re looking to train in
        boxing, kenpo karate, or even close quarters combat, we have experienced
        instructors that can help you reach your goals in a fun and safe
        environment.
      </p>
      <br></br>
      <Card data-aos="fade-in">
        <CardMedia
          component="img"
          height="140"
          image={boxG1}
          alt="boxing"
          className="centered-image"
        ></CardMedia>
      </Card>
      <br></br>
      <h3>Community and Comradery </h3>
      <br></br>
      Boxing may be an individual sport but we work out, train, and get better
      as a team. There is strength in numbers, and together, we can help achieve
      your health, fitness & training goals in a fun and safe environment.
      <Offer data-aos="fade-in"></Offer>
      <Divider data-aos="fade-in"></Divider>
      <Card data-aos="fade-in">
        <CardMedia
          component="img"
          height="140"
          image={ken23}
          alt="boxing"
          className="centered-image"
        ></CardMedia>
      </Card>
      <br></br>
      <div data-aos="fade-in">
      <p>
        <h4>
          {" "}
          <strong>
            Our Goal At Benicia Martial Arts Is To Instill A High Level Of Skill
            While Imparting The Traditions Of Respect, Self-Discipline, Humility
            And Compassion
          </strong>
        </h4>
      </p>
      <br></br>
      <p>
        Training can help kids improve their physical fitness, including
        coordination, flexibility, and strength, but the practice can also help
        reinforce some of lifes valuable lessons — such as{" "}
        <strong>perseverance and self-control.</strong>
        <br></br>Martial arts also helps kids develop listening and attention
        skills that are essential in the classroom and beyond.{" "}
      </p>
      </div>
      <Follow data-aos="fade-in"/>

    </div>
  );
}

export default Home;
