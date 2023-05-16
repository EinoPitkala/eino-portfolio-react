import React from 'react'
import Button from '../../modules/Button'

const LandingCard = () => {
  return (
    <div className="landing-card">
        <div className="landing-card-name">
            <h1>Hi, I'm <br /> <span className='my-name'>Eino Pitkälä</span></h1>
            
        </div>
        <div className="landing-card-description">
            <p>14 year old entrepreneur, Front-End developer and tech nerd.</p>
        </div>
        <div className="landing-card-buttons">
            <Button href="/projects" content="Projects"/>
            <Button href="/clients" content="Clients"/>
            <Button href="/info" content="Info"/>
        </div>
    </div>
  )
}
export default LandingCard