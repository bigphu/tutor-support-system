import React from 'react';

import Button from '../../components/button/Button';

import './Home.css';
import background from '../../assets/home-background.png';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='left-filler large-2 medium-2 small-0'></div>

      <div className='text-container large-5 medium-5 small-12'>
        <span className='page-title text-hero text-primary text-extra-bold'>
          TUTOR
          SUPPORT
          SYSTEM
        </span>

        <span className='page-description text-small text-accent text-normal'>
          Participate in an optimized digital peer tutoring and academic support program
        </span>

        <div className='button-container'> 
          <Button className="" size="lg">Register</Button>
          <Button className="" size="lg" variant="secondary">Learn more</Button>
        </div>
      </div>

      <img className='large-5 medium-5 small-0' src={background} alt="Home Background" />

    </div>
  )
}

export default Home