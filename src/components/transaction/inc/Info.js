const Info = ({isOpen,setIsOpen, title, content}) => {
  
  return (
    <>
 <section className={`modal-wrapper ${isOpen ? 'show-modal z-[5000]' : 'hide-modal'} `}>

      <div className="modal-inner-wrapper">

      <div className="modal-body sm:w-1/2 md:w-1/3 lg:w-1/4">
            <header className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">{ title }</h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
            </header>

            <div className={`flex flex-col justify-center items-center space-y-5`}>
               <p className="text-base">{ content }</p>
            </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Info;