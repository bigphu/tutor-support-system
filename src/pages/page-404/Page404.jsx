import React from 'react'

import img404 from '../../assets/page-404.jpg'
import './Page404.css'

import PageLayout from '../../components/page-layout/PageLayout'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className='page404 row'>
        <img src={img404} alt='Error'></img>

        <div className='text-big text-dark text-bold'>Error 404: Page not found (T^T) </div>

        <Button type='ghost' onClick={() => navigate('/')}>Back to home</Button>
      </div>
    </PageLayout>
  )
}

export default Page404