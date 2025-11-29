import React from 'react'

import './PageLayout.css'

const PageLayout = ({children, ...props}) => {
  return (
    <div className='page-layout-containter'>
      <div className='left-filler large-2 medium-1 small-0'></div>
      <div className='middle large-8 medium-10 small-12'>
        <div className='top-filler large-12 medium-12 small-12'></div>

        <div className='main-content large-12 medium-12 small-12'>      
          {children}
        </div>

        <div className='bottom-filler large-12 medium-12 small-12'></div>
      </div>
      <div className='right-filler large-2 medium-1 small-0'></div>
    </div>
  )
}

export default PageLayout
