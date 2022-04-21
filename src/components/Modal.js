import React from 'react'
import Navbar from '/src/layouts/navbar';

const Modal = ({ children, isOpen, setIsOpen, bodyClass}) => {

	return (
		 <section  className={`modal-wrapper ${isOpen ? 'show-modal' : 'hide-modal'} `}>
           <img src={`/assets/svgs/circular-bg.svg`} className="absolute z-0 -top-[20%] opacity-20" />
            <img src={`/assets/svgs/circular-bg.svg`} className="absolute z-[201] -left-[60%] -bottom-[20%] opacity-20" />
          <img src={`/assets/svgs/circular-bg.svg`} className="absolute z-[201] -right-[40%] -bottom-[20%] opacity-20" />

	      <div className="modal-inner-wrapper justify-start  space-y-5 md:space-y-10">
            <div className="relative z-[301] w-full md:px-10">
             <Navbar isContainer={false} />
             </div>
	      	<div className={`modal-body ${bodyClass}`} >

				{ children }

			</div>
		  </div>
		</section>
	)
}

export default Modal