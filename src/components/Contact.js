import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";


import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Offer from "./Offer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import MapIcon from "@mui/icons-material/Map";
import Follow from "./follow";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import the AccessTime icon
import outView from "../images/outView.jpg";

function Contact() {
  return (
    <div className="contact">
      <h1 style={{ color: "black" }}>Get in touch</h1>
      <br></br>

      <div className="contact-contact-info" >
        <a
          href="https://maps.google.com/?q=2002+Columbus+Pkwy+Benicia+CA+94510"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            size="small"
            aria-label="address"
            className="contact-link"
          >
            <RoomIcon style={{ color: "black" }} />
          </IconButton>
          <span className="address" style={{ color: "black" }}>
            2002 Columbus Pkwy Benicia, CA 94510
          </span>
        </a>

        <div className="contact-contact-info">
          <a href="tel:707-747-1722" className="contact-phone-link">
            <IconButton size="small" aria-label="phone">
              <PhoneIcon style={{ color: "black" }} />
            </IconButton>
            <span className="phone-number" style={{ color: "black" }}>
              707-747-1722
            </span>
          </a>
        </div>
        <a href="mailto:info@beniciabma.com" className="email-link">
          <IconButton size="small" aria-label="email">
            <EmailIcon style={{ color: "black" }} />
          </IconButton>
          <span className="email-address" style={{ color: "black" }}>
            info@beniciabma.com
          </span>
        </a>
      </div>

      <br></br>
      <Box 
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
      >
        <AccessTimeIcon className="clock" /> <h3>Hours of Operation</h3>
      </Box>
      <br></br>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
      >
        {" "}
        <strong>
          {" "}
          <div className="clock">Monday - Friday: </div>
        </strong>{" "}
        9:00am - 10:00pm
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
      >
        {" "}
        <strong>
          {" "}
          <div className="clock">Saturdays: </div>
        </strong>{" "}
        10:00am - 3:00pm{" "}
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
      >
        {" "}
        <strong>
          {" "}
          <div className="clock">Sundays: </div>
        </strong>{" "}
        Closed
      </Box>

      <Follow  data-aos="fade-in"/>

      <br></br>
      <div data-aos="fade-in">
      <Card>
        <CardContent>
          <h3>
            Directions : <span> </span>
            <MapIcon style={{ fontSize: 20, color: "grey" }} />
          </h3>
          <br></br>

          <p>
            <strong>From South and East Bay:</strong>
            <br></br>
            Take 680 North, cross over the Benicia Bridge and stay left onto
            780, exit right onto Columbus Parkway (4th exit).
            <br></br>
            <br></br>
            <strong>From North Bay:</strong>
            <br></br>
            Take 780 South and exit Columbus Parkway. Make a left.
            <br></br>
            <br></br>
            <strong>From SF Bay Area:</strong>
            Take the Bay Bridge East, 80 north, 780 south east. Exit Columbus
            Parkway and make a left.
          </p>
        </CardContent>
      </Card>
      </div>

      <br></br>
      <br></br>
      <div data-aos="fade-in">

      <Card className="paper">
        <CardMedia
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.6246825184594!2d-122.1957964173262!3d38.079120922159554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085721a0e91654f%3A0xebf67d980354b797!2sBenicia%20Boxing%20%26%20Martial%20Arts!5e0!3m2!1sen!2sin!4v1722311914204!5m2!1sen!2sin"
          title="Google Map"
          style={{ border: 0, height: "400px" }}
          allowFullScreen
          loading="lazy"
        />
      </Card>
      </div>

      <br></br>
      <br></br>
      <div data-aos="fade-in">

      <Card>
        <CardMedia
          component="img"
          image={outView}
          alt="Dojo"
          className="centered-image"
          loading="lazy"
        ></CardMedia>
      </Card>
      </div>

      <Offer data-aos="fade-in"></Offer>
    </div>
  );
}

export default Contact;
