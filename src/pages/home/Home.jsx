import React from 'react'
import HeroBanner from './herobanner/HeroBanner'
import Trending from './trending/Trending'
import './style.scss'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
   
    </div>
  )
}

export default Home
