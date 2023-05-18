import LandingCard from '../components/home/LandingCard'
import Projects from '../components/home/Projects'
import React from 'react'
import Info from '../components/home/Info'
// import MyTech from '../components/home/MyTech'
// MyTech is commented out because it's not finished yet.

const Home = () => {
  return (
    <>
        <LandingCard />
        <Info />
        <Projects />
        {/* <MyTech /> */}
    </>
  )
}
export default Home
