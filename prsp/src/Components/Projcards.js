import React, { useEffect, useState } from 'react'
import './Projcard.css'
import Modal from './Modal';


const  Projcards = () => {
    
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [state,setState] = useState([]);
    const [modalsrc, setModalsrc] = useState('');
    const openModal = (link) => {
        setModalsrc(link)
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalsrc('');
    }

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
                    <div className='project-logo'><img className='project-logoos' src={value.src} alt='pc'/></div> 
                    <div className='proj-desc text-center mt-5 font-encode font-bold'>{value.name}</div>
                    <div className='proj-link font-Noto text-center hover:text-blue-700 ' onClick={() => openModal(value.link)}>link</div>
                    </div>
        ))}
       <Modal isOpen={isModalOpen} onClose = {closeModal}  src={modalsrc} />
    </div>
  )
}

export default Projcards
