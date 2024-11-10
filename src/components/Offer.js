import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import SignupModal from './SignUpModal.js';

function Offer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="signup-content">
      <h2>GET TWO WEEKS OF TRAINING FOR FREE!</h2>
      <p>Come check out a clean, state of the art facility, and the most professional instructors.</p>
      <div className="signup-box">
        <br></br>
        <Button variant="contained" color="primary" onClick={handleOpen}>Sign up Now!</Button>
      </div>
      <SignupModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Offer;