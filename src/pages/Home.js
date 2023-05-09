import LandingCard from '../components/home/LandingCard'
import Projects from '../components/home/Projects'
import React from 'react'
// import MyTech from '../components/home/MyTech'
// MyTech is commented out because it's not finished yet.

export default function Home() {
  return (
    <>
        <LandingCard />
        <Projects />
        {/* <MyTech /> */}
    </>
  )
}
