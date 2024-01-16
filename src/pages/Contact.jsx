import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  return (
    <>
      <Box sx={{my:10, ml:10,
      "& h4":{fontWeight:"bold", mb:2},
      "@media (max-width:600px)":{ml:3, pr:2}
      }}>
        <Typography variant='h4'>Contact Mizu Resturant</Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam modi quis hic, provident impedit odit reprehenderit dolore velit perferendis laboriosam nihil earum beatae enim sit ab voluptatum ex eius a culpa voluptates? Ex dolor, sint fugiat sunt quam quidem nobis expedita, provident deserunt aut modi voluptates, est inventore adipisci?</p>
        <Box sx={{mt:3, width:"600px",
                "@media (max-width:600px)":{width:"300px"}
        }}>
          <TableContainer component={Paper}>
            <Table area-aria-label='contact table'>
              <TableHead>
                <TableRow><TableCell sx={{bgcolor:"black", color:"aliceblue",}}>Contact Details</TableCell></TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell><SupportAgentIcon sx={{color:"red",pt:1}}/>1800-00-0000</TableCell></TableRow>
                <TableRow><TableCell><EmailIcon sx={{color:"skyblue",pt:1}}/>help@mizu.com</TableCell></TableRow>
                <TableRow><TableCell><CallIcon sx={{color:"green",pt:1}}/>1234567890 (tollfree)</TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
)
}

export default Contact