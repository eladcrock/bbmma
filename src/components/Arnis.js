import React from 'react';
import ArnisSchedule from "./ArnisSchedule.js";
import Divider from '@mui/material/Divider';
import MelImage from "../images/arnisLogo.png";
import StudentImage from "../images/arnis2.jpg";
import Card from '@mui/material/Card';  
import "../App.css";
import BenArnis from './BenArnis.js';
import ArnisLightBox from './ArnisLightBox.js';



function Arnis() {
  return (
    <div className="arnis" data-aos="fade-in">
      <h1>Balintawak Arnis</h1>
      <br></br>

        <p>
          <strong>Island Warriors Martial Arts strives to develop the student into a whole person</strong> – Body, Mind and Spirit. Through <strong>Filipino Martial Arts (FMA),</strong> the student will develop not only skills in the ancient Filipino fighting arts, but also philosophy and skills that will carry over to everyday life.</p>

       <p>  <strong>Balintawak Arnis</strong> is a style of  Filipino Martial Arts developed by Venancio  “Anciong” Bacon in the 1950s from his earlier lessons from Lorenzo Saavedra. It was founded in Cebu City, and its original name was the Balintawak Self Defense Club, where it was originally taught. The club took its name from the street of its location, Balintawak Street, where the original Balintawak masters trained. Master Mel Orpilla earned his Master’s certification under Grand Master Ver Villasin, the son of Grand Master Jose Villasin, one of Anciong Bacon’s original students   </p>
    <br></br>
    <br></br>
    <br></br>

    <Card data-aos="fade-in">
        <img src={MelImage} alt="Dojo" className="centered-image"     loading="lazy"
        />{" "}
      </Card>
      <br></br>
  
<BenArnis data-aos="fade-in"/>
<br></br>
    <br></br>   
    <br></br>
    <br></br>

    <Card data-aos="fade-in">
        <img src={StudentImage} alt="Logo" className="centered-image" 
            loading="lazy"
/>{" "}
      </Card>
      <br></br>

    <ArnisSchedule data-aos="fade-in"/>
    <br></br>
    <ArnisLightBox data-aos="fade-in"/>
    <br></br>
    <br></br>

<p data-aos="fade-in"> To learn more about Balintawak Arnis at Benicia Boxing and Martial Arts, please contact<br></br>

 <strong>Mel Orpilla</strong>  <br></br><strong>707-477-1159 </strong> <br></br><strong>mel9661@orpilla.com </strong>  <br></br> Thank you and we look forward to seeing you soon!</p>

    </div>
  );
}

export default Arnis;