
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";


import Offer from "./Offer";
import DojoImage from "../images/fac3.jpg";
import BagImage from "../images/fac5.jpg";
import outView from "../images/outView.jpg";
import { CardHeader } from "@mui/material";
import "../App.css";
import FacLightBox from "./FacLightBox";
import MapIcon from '@mui/icons-material/Map';
import Follow from "./follow";

function Facility() {
  return (
    <div className="facility">
      <h1>Our Facility</h1>
      <br></br>
      <p>
        We are located in the waterside city of Benicia, CA, in Solano County.
        Just East of Vallejo, we are located in a residential area of Benicia,
        in Parkway Plaza. Our neighbors are a number of small local businesses.
      </p>
      <p>
        Simple freeway access and ample parking make our facility very
        convenient for our customers. The 1300 sq. foot space has been newly
        renovated to include bamboo flooring, a comfortable seating area, an
        open layout, additional lighting, fresh paint and upgraded bathroom.
      </p>
      <br></br>
   
    
      <br></br>
      

      <Card data-aos="fade-in">
        <CardHeader title="Martial Arts Dojo" titleTypographyProps={{variant:'h6', fontWeight:'bold'}}/>  
        <CardMedia
          component="img"
          image={DojoImage}
          alt="Dojo"
          className="centered-image"
          loading="lazy"

        ></CardMedia>
        <CardContent  >



         
            <ul >
              <li>Training area covered with High quality Swain sport mats</li>
              <br></br>
              <li>
                Mirrors line 48 feet of wall for an immersive training
                experience
              </li>
              <br></br>

              <li>Punching bags, striking dummies, and grappling equipment</li>
              <li>
              <br></br>

                Fully equipped with shields, weapons and much more
              </li>
              <br></br>

              <li>
                Seating area, along with full size windows allow viewing up close, or from a distance{" "}
              </li>
              <br></br>

              <li>Restroom and designated changing area </li>
            </ul>
         
        </CardContent>
      </Card>

      <br></br>
      <br></br>
      <Card data-aos="fade-in">
        <CardHeader title="Boxing Gym" titleTypographyProps={{variant:'h6', fontWeight:'bold'}}
        /> 
       
        <CardMedia
          component="img"
          image={BagImage}
          alt="Dojo"
          className="centered-image"
          loading="lazy"

        ></CardMedia>
        <CardContent >

    


        <ul>
          <li>Powerful heavy-bags for developing power</li>
          <br></br>

          <li>Double-end bags for improving hand-eye coordination</li>
          <br></br>

          <li>Speed bags for increasing hand speed</li>
          <br></br>

          <li>RingSide boxing ring with 6 boxing stations</li>
          <br></br>


          <li>Pads, Handmitts, and body pads for training</li>
          <br></br>

          <li>Weights, kettlebells, and other strength training equipment</li>
          <br></br>

        </ul>
      </CardContent>
      </Card>
      <br></br>
      <br></br>


      <Card data-aos="fade-in">
        <CardHeader title="Getting Here"titleTypographyProps={{variant:'h6', fontWeight:'bold'}}/>
      <CardMedia
          component="img"
          image={outView}
          alt="Dojo"
          className="centered-image"
          loading="lazy"

        ></CardMedia>
        <CardContent >
          <h3>Directions :  <span>  </span>

          <MapIcon style={{ fontSize: 20, color: 'grey', }} /></h3>
      

        <p>
<strong>From South and East Bay:</strong><br></br>

Take 680 North, cross over the Benicia Bridge and stay left onto 780, exit right onto Columbus Parkway (4th exit).
<br></br><br></br>

<strong>From North Bay:</strong><br></br>

Take 780 South and exit Columbus Parkway. Make a left.
<br></br><br></br>



<strong>From SF Bay Area:</strong>
Take the Bay Bridge East, 80 north, 780 south east. Exit Columbus
Parkway and make a left.
       
        </p>
        </CardContent>



      </Card>
      <Follow data-aos="fade-in"/>
      
      <FacLightBox data-aos="fade-in"/>
      <br></br>
      <Offer data-aos="fade-in"/>

    </div>
  );
}

export default Facility;
