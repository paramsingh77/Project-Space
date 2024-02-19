import React from 'react'
import './Projcard.css'
const Projcards = () => {
    
    const cardsEl  = [];

    async function getData(){
        let response = await fetch('/prsp/src/Components/data.json')
        let wait = await  response.json();
        console.log("Data",wait);
    }
    getData();
 
    for(let i = 0 ; i < 8 ; i++){
        cardsEl.push(
    
            <div className='card-box'>
                <div className='project-logo'>ndsm</div>
                <div className='proj-desc'>ksdlf</div>
                <div className='proj-link'>,msdfn</div>
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
