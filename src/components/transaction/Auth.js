import { useState } from "react";
import Signin from "./inc/Signin";
import Signup from "./inc/Signup";
import VerifyCode from "./inc/VerifyCode";
import VerifyBvn from "./inc/VerifyBvn";
import VerifyMobile from "./inc/VerifyMobile";

const Step2 = ({isOpen,setIsOpen,next}) => {
  
  const [ isInnerOpen, setIsInnerOpen ] = useState({signin: false,signup:false,verifyMobile:false,verifyBvn:false,verifyCode:false});

  return (
    <>
      <Signin 
       isOpen={isInnerOpen.signin} 
       setIsOpen={() => setIsInnerOpen({...isOpen,signin: !isInnerOpen.signin}) } />

       <Signup 
       isOpen={isInnerOpen.signup} 
       setIsOpen={() => setIsInnerOpen({...isOpen,signup: !isInnerOpen.signup}) } 
       next={() => setIsInnerOpen({...isOpen,signup: !isInnerOpen.signup,verifyMobile :  !isInnerOpen.verifyMobile}) } 
       />

      <VerifyMobile 
         isOpen={isInnerOpen.verifyMobile} 
         setIsOpen={() => setIsInnerOpen({...isOpen,verifyMobile: !isInnerOpen.verifyMobile}) } 
         next={() => setIsInnerOpen({...isOpen,verifyMobile: !isInnerOpen.verifyMobile,verifyBvn :  !isInnerOpen.verifyCode}) } 
         back={() => setIsInnerOpen({...isOpen,signup: !isInnerOpen.signup,verifyMobile :  !isInnerOpen.verifyMobile}) } 
       />

       <VerifyBvn 
         isOpen={isInnerOpen.verifyBvn} 
         setIsOpen={() => setIsInnerOpen({...isOpen,verifyBvn: !isInnerOpen.verifyBvn}) } 
         next={() => setIsInnerOpen({...isOpen,verifyBvn: !isInnerOpen.verifyBvn,verifyCode :  !isInnerOpen.verifyCode}) } 
         back={() => setIsInnerOpen({...isOpen,verifyBvn: !isInnerOpen.verifyBvn,verifyMobile :  !isInnerOpen.verifyMobile}) } 
       />

       <VerifyCode 
         isOpen={isInnerOpen.verifyCode} 
         setIsOpen={() => setIsInnerOpen({...isOpen,verifyCode: !isInnerOpen.verifyCode}) } 
         back={() => setIsInnerOpen({...isOpen,verifyCode: !isInnerOpen.verifyCode,verifyBvn :  !isInnerOpen.verifyBvn}) } 
       />
       

      <section className={`modal-wrapper ${isOpen ? 'show-modal' : 'hide-modal'} `}>

      <div className="modal-inner-wrapper">

      <div className="modal-body">
            <header className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">Connect to Saturn Ramp </h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Let’s get you going with your transaction</p>
            </header>

            <section className={`grid gap-5`}>
                  <button 
                     onClick={() => {
                      setIsOpen();
                      setIsInnerOpen({...isOpen,signin: !isInnerOpen.signin}) }
                    }
                     className="text-left bg-blue-900 p-3 rounded-lg text-white">
                     <h2>Sign In</h2>
                     <p className="text-sm">Welcome back, connect to complete your transactions</p>
                  </button>

                  <button 
                    onClick={() => {
                      setIsOpen();
                      setIsInnerOpen({...isOpen,signup: !isInnerOpen.signup}) }
                    }
                    className="text-left p-3 rounded-lg bg-gray-800">
                     <h2>Get Started </h2>
                     <p className="text-sm">Are you new here? Sign up to complete your transactions</p>
                  </button>
            </section>
         </div>
      </div>
  </section>
    </>
  )
}

export default Step2;