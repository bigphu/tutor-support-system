import React from 'react'

import mikuFooter from '../../assets/miku-footer.jpg'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='text-small text-light text-bold'>
        This website is developed by 
      </p>
      <a href='https://github.com/bigphu' target='_blank' rel='noreferrer'>
        <img
          src={mikuFooter}
          alt='Miku Footer'
          className='footer-image'
        />
      </a>
    </div>
  )
}

export default Footer
