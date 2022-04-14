const Loader = ({status}) => {
  return (
    <>
     <div className={`fixed top-5 left-5 z-[10000] inline-block  p-5 ${status ? 'block' : 'hidden'}`}>
       <div className="w-10 h-10 border-x-2 border-blue-200 rounded-full animate-spin"></div>
    </div>
    </>
  )
}

export default Loader;