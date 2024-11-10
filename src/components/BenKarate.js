import {
    Typography,
  Box,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Correct import
import "../App.css";


function BenKarate() {
   ;

    return (
        <div>
                            <br></br>
              <h2>Benefits of Karate</h2>
              <br></br>
        <div className="benefits">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Self-Discipline
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
                <Typography variant="body1">Learning to Set and Achieve Goals


                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Encouraging Non-Violent Conflict Resolution

                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Improving Listening Skills
                </Typography>

            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Instilling a Sense of Respect
            </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Physical Fitness and Healthy Living

                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Increased Self-Esteem


                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: '#0000CC', marginRight: '8px' }} />
            <Typography variant="body1">Developing Teamwork Skills


                </Typography>
            </Box>

           
        </div>
        </div>
    );
}

export default BenKarate;
 