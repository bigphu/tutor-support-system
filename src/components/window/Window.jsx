import React from 'react'

import './Window.css';

import PageLayout from '../page-layout/PageLayout';

const Window = ({title, children}) => {
  return (
    <div className='window-container'>
        <div className='left-filler large-1 medium-1 small-0'></div>
        <div className='middle large-10 medium-10 small-12'>
          <div className='top-filler large-12 medium-12 small-12'></div>

          <div className='main-content large-12 medium-12 small-12'>      

            <div className='window-title text-big text-primary text-bold'>
              {title}
            </div> 

            {children}
          </div>

          <div className='bottom-filler large-12 medium-12 small-12'></div>
        </div>
      <div className='right-filler large-1 medium-1 small-0'></div>
    </div>
  )
}



export default Window
