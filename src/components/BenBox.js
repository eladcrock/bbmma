import React from 'react';

import {
  Typography,
  Box,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Correct import
import "../App.css";


function BenBox() {

   
    return (
        <div>
                          <br></br>

              <h2>Benefits of Boxing</h2>
              <br></br>

        <div className="benefits">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
                <Typography variant="body1">Enhanced Cardiovascular Health                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Improved Core Stability and
                Total-Body Strength
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Better Coordination and Body Awareness
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Improved Body Composition/Increased Muscle Tone
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Stress relief and improved mental health</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Improved Confidence and Self-Esteem
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Build Strong Bones and Ligaments

                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Fat Burning

                </Typography>
            </Box>

           
        </div>
        </div>
    );
}

export default BenBox;
 