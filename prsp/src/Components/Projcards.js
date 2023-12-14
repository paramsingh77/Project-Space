import React from 'react'
import './Projcard.css'
const Projcards = () => {

    const cardsEl  = [];

    for(let i = 0 ; i < 8 ; i++){
        cardsEl.push(
            <div className='card-box'>
                <div className='project-logo'></div>
                <div className='proj-desc'></div>
                <div className='proj-link'></div>
            </div>
        )
    }
  return (
    <div className='parent-card'>
        {cardsEl}
    </div>
  )
}

export default Projcards
