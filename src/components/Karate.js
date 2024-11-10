import React from "react";

import OfferK from "./OfferK";
import Divider from "@mui/material/Divider";
import BenKarate from "./BenKarate";
import KenLightBox from "./KenLightBox";
import "../App.css";
import Card from "@mui/material/Card";
import "../App.css";
import ken4 from "../images/ken4.jpg";
import ken13 from "../images/ken13.jpg";
import KenSchedule from "./KenSchedule";
import Follow from "./follow";

function Karate() {
  return (
    <div className="Karate" data-aos="fade-in">
      <h1>Kenpo Karate</h1>
      <br></br>
      <p>
        <strong> Benicia Boxing & Martial Arts </strong>
        offers Kenpo Karate classes for kids ages <strong> 5 to 12. </strong>
        Training in traditional <strong>Kenpo Karate </strong>
        will give you real life self-defense skills. We will train you on how to
        break out of grappling locks, self-defense techniques to defend against
        punch and kick attacks, as well as defense tactics against weapons
        attacks. We also train in traditional Chinese and Japanese weapons.
      </p>
      <br></br>{" "}
      <p>
        <strong> Kenpo Karate </strong>
        incorporates all the strikes you will find in long-range fighting, such
        as Tae Kwon Do. Our Mid-Range fighting techniques will teach you how to
        use your hands for blindingly fast striking. For close-in fighting
        you’ll learn how to deliver crushing elbows and knees. Martial arts is a
        great way to hone your character while keeping your body, mind and
        spirit sharp. Gichin Funakoshi, the father of Karate, once said,
        “control your body, control your mind, control your life, control your
        destiny.”{" "}
      </p>
      <br></br>
      <Card>
        <img src={ken4} alt="Student" className="centered-image" />{" "}
      </Card>
      <Divider data-aos="fade-in"/>
      <br></br>
      <BenKarate data-aos="fade-in"/>
      <br></br>
      <br></br>
      <Card data-aos="fade-in">
        <img src={ken13} alt="Student" className="centered-image" />{" "}
      </Card>
      <KenSchedule data-aos="fade-in"/>
      <KenLightBox data-aos="fade-in"/>
      <OfferK data-aos="fade-in"/>
    </div>
  );
}

export default Karate;
