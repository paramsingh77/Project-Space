import React, { useEffect, useState } from 'react'
import './Projcard.css'
const  Projcards = () => {
    
    const [state,setState] = useState([]);

    useEffect(()=>{
        const grabData = async() => {
        try{
            let op = await fetch(`https://raw.githubusercontent.com/paramsingh77/Project-Space/main/prsp/src/Components/data.json`);
            let response =  await op.json();
            let response1 = response.data
            console.log(response1)
            setState(response1)
        }
        catch(err){
            console.log("error");
        }
        }

        grabData()
    },[])
    

  return (
    <div className='parent-card'>
        { state.slice(1,8).map((value,index)=>(
                    <div className='card-box' key={index}>
                    <div className='project-logo'><img src={value.src} alt='pc'/>{value.src}</div> 
                    <div className='proj-desc'>{value.name}</div>
                    <div className='proj-link'>{value.link}</div>
                    </div>
        ))}
       
    </div>
  )
}

export default Projcards
