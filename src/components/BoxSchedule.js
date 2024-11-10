import React from "react";
import "../App.css";
import Button from '@mui/material/Button';
import { useState } from 'react';
import SignupModal from './SignUpModal.js';

function BoxSchedule() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="signup-content">
      <div className="schedule-fees-container">
        <div className="schedule-column">
          <h2>Membership Fees</h2>
          <p> <strong>$120 Monthly </strong></p> 
    
          <p> Morning and Evening classes</p>
            <p>Weekdays and Weekends</p>
            <br></br>
            <p className="fineBold"> 
Gym Available during all open hours for members</p>

        </div>
        <br></br>

      </div>
    

      <div className="signup-box">
      <Button variant="contained" color="primary" onClick={handleOpen}>Start Now!</Button>
      </div>
      <SignupModal open={open} handleClose={handleClose} />


    </div>
  );
}

export default BoxSchedule;
