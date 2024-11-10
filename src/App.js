import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Boxing from "./components/Boxing";
import Facility from "./components/Facility";
import Martial from "./components/Martial";
import NotFound from "./components/NotFound";
import Arnis from "./components/Arnis.js";
import Karate from "./components/Karate.js";
import "./App.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import BenBox from "./components/BenBox";
import ArnisSchedule from "./components/ArnisSchedule.js";
import Ring from "./components/Ring.js";
import BenKarate from "./components/BenKarate.js";

import Lightbox from "yet-another-react-lightbox";
import BoxLightBox from "./components/BoxLightBox.js";

import "yet-another-react-lightbox/plugins/captions.css";

import Form from "./components/form.js";
import KenLightBox from "./components/KenLightBox.js";
import BenArnis from "./components/BenArnis.js";
import ArnisLightBox from "./components/ArnisLightBox.js";

import OfferK from "./components/OfferK.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BoxSchedule from "./components/BoxSchedule.js";
import KenSchedule from "./components/KenSchedule.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Testimonial from "./components/Testimonial.js";
import SignUpModal from "./components/SignUpModal.js";
import {
  faFacebook,
  faInstagram,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "./components/ScrollToTop.js";

import { IconButton } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import Follow from "./components/follow.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function AppContent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log("Current path:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div>
        <header>
          <AppBar className="tool">
            <Toolbar className="tool">
              <Link to="/">
                <img
                  src="./images/logoTop.png"
                  alt="Logo"
                  className="logoTop"
                />
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <IconButton
                className="hamburger"
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={toggleMenu}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={toggleMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <List>
                  <ListItem button component={Link} to="/" onClick={toggleMenu}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/about"
                    onClick={toggleMenu}
                  >
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/boxing"
                    onClick={toggleMenu}
                  >
                    <ListItemText primary="Boxing" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/karate"
                    onClick={toggleMenu}
                  >
                    <ListItemText primary="Karate Kenpo" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/arnis"
                    onClick={toggleMenu}
                  >
                    <ListItemText primary="Balintawak Arnis" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/facility"
                    onClick={toggleMenu}
                  >
                    <ListItemText primary="Our Facility" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/contact"
                    onClick={toggleMenu}
                  >
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
              <div className="desktop-menu">
                <nav className="navbar">
                  <ul className="nav-links">
                    <li>
                      <Link
                        to="/"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/boxing"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Boxing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Karate"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Kenpo Karate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Arnis"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Balintawak Arnis
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/facility"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Our Facility
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Toolbar>
          </AppBar>
        </header>
        <ScrollToTop />
        {["/", "/home"].includes(location.pathname) && (
          <div id="showcase" data-aos="fade-in">
            <p></p>
          </div>
        )}

        {["/arnis", "/Arnis"].includes(location.pathname) && (
          <div id="arnisShowcase">
            <video autoPlay loop muted playsInline>
              <source src="/images/arnisHeader.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {location.pathname === "/facility" && (
          <div id="facilityShowcase" data-aos="fade-in">
            <p></p>
          </div>
        )}
        {location.pathname === "/about" && (
          <div id="aboutShowcase">
            <video autoPlay loop muted playsInline>
              <source src="/images/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p></p>
          </div>
        )}
        {["/karate", "/Karate"].includes(location.pathname) && (
          <div id="kenpoShowcase">
            <video autoPlay loop muted playsInline>
              <source src="/images/kenpoHeader.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {location.pathname === "/boxing" && (
          <div id="boxShowcase">
            <video autoPlay loop muted playsInline>
              <source src="/images/boxingHeader.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p></p>
          </div>
        )}
        {location.pathname === "/contact" && (
          <div id="contactShowcase" data-aos="fade-in">
            <p></p>
          </div>
        )}
      </div>
      <main className="container">
        <TransitionGroup>
          <CSSTransition timeout={500} classNames="fade">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/boxing" element={<Boxing />} />
              <Route path="/martial" element={<Martial />} />
              <Route path="/facility" element={<Facility />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/Arnis" element={<Arnis />} />
              <Route path="/Karate" element={<Karate />} />
              <Route path="/ArnisSchedule" element={<ArnisSchedule />} />
              <Route path="/BenBox" element={<BenBox />} />
              <Route path="/Ring" element={<Ring />} />
              <Route path="/BenKarate" element={<BenKarate />} />
              <Route path="/BoxLightBox" element={<BoxLightBox />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/KenLightBox" element={<KenLightBox />} />
              <Route path="/BenArnis" element={<BenArnis />} />
              <Route path="/ArnisLightBox" element={<ArnisLightBox />} />
              <Route path="/arnisSlides" element={<arnisSlides />} />
              <Route path="/facSlides" element={<facSlides />} />
              <Route path="/OfferK" element={<OfferK />} />
              <Route path="/slides" element={<slides />} />
              <Route path="/slidesK" element={<slidesK />} />
              <Route path="/lightbox" element={<Lightbox />} />
              <Route path="BoxSchedule" element={<BoxSchedule />} />
              <Route path="KenSchedule" element={<KenSchedule />} />
              <Route path="/Follow" element={<Follow />} />
              <Route path="/Testimonial" element={<Testimonial />} />
              <Route path="/SignUpModal" element={<SignUpModal />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <footer>
        <footer className="footer" data-aos="fade-in">
          <p>
            <h4>Benicia Boxing & Martial Arts</h4>
          </p>
          <div className="address-link">
            <a
              href="https://maps.google.com/?q=2002+Columbus+Pkwy+Benicia+CA+94510"
              target="_blank"
              rel="noopener noreferrer"
              text-decoration="none"
            >
              <IconButton
                size="small"
                aria-label="address"
                className="address-link"
                text-decoration="none"
              >
                <RoomIcon className="icon" />
              </IconButton>
              <span className="address" text-decoration="none">
                2002 Columbus Pkwy Benicia, CA 94510
              </span>
            </a>
          </div>
          <a href="tel:707-747-1722" className="foot-phone-link">
            <IconButton size="small" aria-label="phone" text-decoration="none">
              <PhoneIcon className="icon" />
            </IconButton>
            <span className="phone-number" text-decoration="none">
              707-747-1722
            </span>
          </a>
          <br></br>
          <a href="mailto:info@boxinggym.com" className="email-link">
            <IconButton size="small" aria-label="email" text-decoration="none">
              <EmailIcon className="icon" />
            </IconButton>
            <span className="email-address">info@beniciabma.com</span>
            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/BeniciaBMA/"
                target="_blank"
                rel="noopener noreferrer"
                text-decoration="none"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
              </a>
              <a
                href="https://www.instagram.com/beniciabma/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                text-decoration="none"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="icon"
                />
              </a>
              <a
                href="https://www.yelp.com/biz/benicia-boxing-and-martial-arts-benicia"
                target="_blank"
                rel="noopener noreferrer"
                text-decoration="none"
              >
                <FontAwesomeIcon icon={faYelp} size="2x" className="icon" />
              </a>
              {/* Add more social media icons here */}
            </div>
          </a>
        </footer>
      </footer>
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
