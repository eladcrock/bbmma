import React from "react";
import "../App.css";
import Button from '@mui/material/Button';
import { useState } from 'react';
import SignupModal from './SignUpModal.js';



function KenSchedule() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  return (
    <div className="signup-content">
      <div className="schedule-fees-container">
        <div className="schedule-column">
          <h2>Membership Fees</h2>
          <p> <strong>$160 Monthly </strong>*</p> 
    
          <p>Evening and Weekend Classes</p>
            <br></br>
            <p className="finePrint"> 
            *We are an authorized Vendor for Visions in Education School Enrichment Voucher program</p>


        </div>
        <br></br>

      </div>
    

      <div className="signup-box">
      <Button variant="contained" color="primary" onClick={handleOpen}>Get Started!</Button>
      </div>
      <SignupModal open={open} handleClose={handleClose} />



    </div>
  );
}

export default KenSchedule;
