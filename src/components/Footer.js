import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'black',color:'aliceblue', p:2}}>
        <Box sx={{my:3, "& svg":{fontSize:"60px", cursor:"pointer", mr:2},
        "& svg:hover":{color:"goldenrod", transform:"translateX(5px)", transition:"all 400ms"}  
    }}>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <GitHubIcon/>
        </Box>
        <Typography variant='h7' sx={{"@media(max-width:600px)":{fontSize:"1rem"}}}>
            All right Reserved &copy; MIZU RESTO
        </Typography>
    </Box>
    </>
  )
}

export default Footer