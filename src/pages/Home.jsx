import React from 'react'
import "./../styles/HomeStyles.css";
import { Link } from 'react-router-dom'
import Banner from "../img/banner.jpeg"

function Home() {
  return (
    <>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Mizu Resturant</h1>
          <p>Best sushi and noodles in India</p>
          <Link to= "./menu">
          <button>ORDER NOW</button>
          {/* <p className="glow"> special offer only for Siddhesh Karande 100% off</p> */}
          </Link>
        </div>
      </div>
    </>
)
}

export default Home