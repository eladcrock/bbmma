import React from "react";
import "../App.css";

function ArnisSchedule() {
  return (
    <div className="signup-content">
      <div className="schedule-fees-container">
        <div className="schedule-column">
          <h2>Schedule</h2>
          <p>Tuesday: 7:00pm-8:30pm</p>
          <p>Sunday: 10:00am-Noon</p>
          <p>WOMENS CLASS: Sundays 3:00pm-4:00pm</p>
        </div>
        <div className="fees-column">
          <h3>Class Fees</h3>

          <p>Adults (18 & over) $100/month</p>
          <p>Children (8-17) $80/month</p>
          <p>Private Lessons $75/hour</p>
          <p>Discounts for siblings/family.<br></br>
            Special Pricing for families/student of other Benicia Boxing &
            Martial Arts classes
          </p>
        </div>
      </div>

      <div className="signup-box"></div>
    </div>
  );
}

export default ArnisSchedule;
