import React from 'react';

import {
 
  Typography,
  Box,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Correct import
import "../App.css";


function BenArnis() {
 
    return (
        <div>
              <h2>Students Will Learn</h2>
              <br></br>

        <div className="benefits">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
                <Typography variant="body1">Balintawak Arnis
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Self Defense
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Self Confidence
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Physical Fitness
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Filipino Culture and History</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#CC0001', marginRight: '8px' }} />
            <Typography variant="body1">Discipline and Mental focus

                </Typography>
            </Box>

            
           
        </div>
        </div>
    );
}

export default BenArnis;
 