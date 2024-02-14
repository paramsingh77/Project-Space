import React from 'react'
import './Landing.css'
import Projcards from './Projcards'
const Landing = () => {

  return (
    <div className='landing-page'>
      
        <div className='work-progress'>
          <div className='sideBar'>
              this is side bar
          </div>
        <div className='icons'><i class="fa-solid fa-bars"></i></div>
            <div className='text-proj'>
               project <span className='color-space'>space</span>
            </div>
            <div className='icons-right'><a href='https://www.github.com/paramsingh77' target='_blank' rel="noopener noreferrer">Github</a></div>
            <div className='icons-right'><a href='https://www.linkedin.com/in/psingh20' target="_blank"rel="noopener noreferrer">LinkedIn</a></div>
        </div>
        <Projcards/>
    </div>
  )
}

export default Landing
