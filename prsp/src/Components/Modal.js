import React from 'react'

const Modal = ({isOpen , onClose , src}) => {

    const closeHandle = () => {
        onClose();
    }
  return (
    isOpen&& (
        <div className='modal absolute  left-0 top-20 w-full h-full mt-200 w-screen flex justify-center -mt-1/2   bg-opacity-50'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times;</span>
                {/* <h2>Website</h2> */}
                <div className='iframe-container'>
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
