import React from 'react'
import './Modal.css'
const Modal = ({isOpen , onClose , src}) => {

  return (
    isOpen&& (
        <div className='modal absolute  left-0 -top-10 pt-40 w-full   flex justify-center heightFix overflow-y-hidden bg-orange-300 bg-opacity-40 '>
            <div className='modal-content rounded-xl bg-gradient-to-r from-black to-black'>
                <span className='close white' onClick={onClose}>&times;</span>
                {/* <h2>Website</h2> */}
                <div className='iframe-container p-12'>
                    <iframe src={src}
                    title='website'
                     width={1000}
                     height={1000}
                     frameBorder={0}
                    >
                        
                    </iframe>

                </div>
            </div>
        </div>
    )
  )
}

export default Modal
