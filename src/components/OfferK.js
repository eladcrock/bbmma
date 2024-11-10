import React from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import SignupModal from './SignUpModal.js';
import { useState } from 'react';
function OfferK() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="signup-content">
    <h2>GET TWO WEEKS OF TRAINING FOR FREE!
    </h2>
    <p> No uniform required during trial period.  Come see what people are talking about!
</p>
<br></br>
    <div className="signup-box">
    <Button variant="contained" color="primary" onClick={handleOpen}>Sign up Now!</Button>
      </div>
      <SignupModal open={open} handleClose={handleClose} />
  </div>
  );
}

export default OfferK;