import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
      <Box sx={{my:15, textAlign:"center", p:4,
      "& h4":{fontWeight:"bold", my:2,fontSize:"2rem"},
      "& p":{textAlign:"justify"},
      "@media (max-width:600px)":{mt:0, "& h4":{fontSize:"1rem"}}
      }}>
        <Typography variant='h4'>Welcome To Mizu Resturant</Typography>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores porro inventore est placeat? Impedit laborum repellat quis! Accusamus repellat cumque debitis voluptatum. Quia veniam reiciendis numquam, voluptates quos recusandae culpa? Ipsa, dolores facere. Id quod iste illo. Voluptate consequatur aliquid praesentium rerum omnis exercitationem vel eum ut sapiente consectetur laboriosam voluptas voluptates, similique minima dolorem quae aperiam error ab? Saepe voluptatibus corrupti repellendus obcaecati et? Enim aut laboriosam doloremque possimus eos mollitia quae, blanditiis doloribus, maxime nemo repellendus, minus amet vitae hic qui sunt voluptate sed tempore laudantium. Saepe voluptate enim id ipsum molestias repellat, alias optio tempora iure assumenda!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus cupiditate a omnis earum explicabo veritatis doloremque quae nesciunt ducimus veniam voluptatum consectetur laudantium illum, itaque quibusdam, soluta eos porro. Est, earum? Praesentium corrupti nihil voluptatibus eaque iste dignissimos inventore alias necessitatibus facilis nulla molestiae, quod natus nisi et ipsum. Officiis maiores quisquam harum aspernatur tenetur, nam autem vel iusto fugit alias illum repudiandae dicta suscipit consequatur, saepe dolores ipsam unde explicabo totam doloribus. Obcaecati dignissimos odio quos eligendi, ipsam eius tempore possimus praesentium! Deleniti necessitatibus id accusamus officiis, illum excepturi, repellendus vitae incidunt quasi velit, eligendi voluptatem est exercitationem?</p>
      </Box>
    </Layout>
)
}

export default About