import React from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import { useState } from 'react';
import SignupModal from './SignUpModal.js';


function Ring() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div className="signup-content">
      <h2>GET IN THE RING!
      </h2>
  
  <p>You’ll be surprised how quickly you’ll improve strength, agility, and coordination.  Try our 2 week free trial and see for yourself how the art of boxing can change your life!
  </p>
  <br></br>
      <div className="signup-box">
      <Button variant="contained" color="primary" onClick={handleOpen}>Sign up Now!</Button>
      </div>
      <SignupModal open={open} handleClose={handleClose} />
    </div>
    );
  }
  
   
export default Ring;