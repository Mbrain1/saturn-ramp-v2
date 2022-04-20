import {useState,useEffect,useContext} from "react";
import Link from "next/link";
import {ContextApi} from "/src/components/ContextApi";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Back from "/src/components/transaction/inc/Back";
import Modal from "/src/components/Modal";

const VerifyCode = ({isOpen,setIsOpen,next,back}) => {
  
  const { transactionData, setTransactionData } = useContext(ContextApi);

    const handleVerification = (e) => {
      e.preventDefault();
      setTransactionData({...transactionData,isLogin: !transactionData.isLogin})
      setIsOpen();
    }

  return (
         <Modal isOpen={isOpen} setIsOpen={setIsOpen} bodyClass="sm:w-1/2 md:w-1/3">
            <header className="space-y-2">
                        <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Verification Code</h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p className="text-base">Provide the verification code sent to you</p>
            </header>

           <form className={`grid md:grid-cols-2 gap-4 text-base text-gray-200`}  onSubmit={(e) => handleVerification(e)}>

                  <div className="form-group md:col-span-2">
                       <div className="flex justify-center items-center space-x-1 ">

                      {String("543454").split("").map((item,index) =>

                          <input
                             key={index} 
                             type="text" 
                             className="form-control py-3 w-12 h-12 px-4 font-bold text-lg  bg-green-50  text-green-500 border border-green-200" 
                             defaultValue={item} 
                           />

                        )}
                      </div>
                  </div>

                  <button className="md:col-span-2 text-center text-blue-900">
                    Didn’t get code, Resend
                  </button> 


                   <div className="form-group md:col-span-2 ">
                      <button 
                        className={`btn w-full py-3 bg-blue-900`} 
                        type="submit">
                          Verify
                        </button>
                  </div>
            </form>
      </Modal>
  )
}

export default VerifyCode;