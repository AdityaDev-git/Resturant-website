import React from 'react'
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from "../data/data";
function Menu() {
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {MenuList.map(menu=>(
          <Card sx={{m:1,maxWidth:"740px"}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:"400px"}} component={'img'} src={menu.img} alt={menu.name} />
              <CardContent>
                <Typography variant='h6' sx={{color:"red"}}>{menu.price}</Typography>
                <Typography variant='h5' gutterBottom component={'div'}>{menu.name}</Typography>
                <Typography variant='body2'>{menu.desc}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
)
}

export default Menu