import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";

import Button from "@mui/material/Button";
import { slides } from "./boxSlides";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../App.css";


function BoxLightBox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log("Slides data:", slides);
  }, []);

  return (
    <>
      <div className="grid-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleOpen(index)}
          >
            <img src={slide.src} alt={slide.caption} />
          </div>
        ))}
      </div>

      <Button variant="contained" color="primary" onClick={() => handleOpen(0)} style={{ padding: '4px 8px', fontSize: '12px', margin: '4px' }}>
        SEE GALLERY
      </Button>
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Thumbnails, Zoom]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
      />
    </>
  );
}

export default BoxLightBox;
