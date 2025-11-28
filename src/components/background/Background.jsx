import React from 'react'
import background from '../../assets/background.png'

const Background = () => {
  return (
    <div className='background-container w-full h-full'>
      {/* Top Layer: Your Image (z-index -1) */}
      <img  
        src={background}
        alt='Background'
        className='fixed left-0 z-[-1] w-full h-full object-cover opacity-[36%]'
      />

      {/* Bottom Layer: Radiant Light/Blue Theme (z-index -2) */}
      <div className='fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]'></div>
    </div>
  )
}

export default Background