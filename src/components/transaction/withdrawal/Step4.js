import { useState, useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { RiInformationFill } from "react-icons/ri";
import Back from "/src/components/transaction/inc/Back";
import { copyText } from "/helpers/toast";
import Modal from "/src/components/Modal";

const Step4 = ({ isOpen, setIsOpen, next, back}) => {

  const {transactionData,setTransactionData} = useContext(ContextApi);

  const handlePayment = (e) => {
      e.preventDefault();

      next();
  }

  return (
     <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <header className="space-y-2">
                         <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Transfer USDT (TRC-20) to Recieve Naira </h2>
                        </div>
                        <p>Send USDT into this Wallet Address to receive Naira</p>
            </header>

             <form className={`grid md:grid-cols-2 gap-4 md:gap-7 text-gray-30`} onSubmit={(e) => handlePayment(e)}>
                

                 <div className="form-group md:col-span-2">
                      <label>Network: Tron (TRC-20)</label>
                      <input  
                        type="text" 
                        className="form-control py-2 font-medium  bg-gray-50 text-sm text-gray-30 border" 
                        defaultValue={`TTYYI39987NXHBX@11783`} />
                      <button type="button" className="absolute right-3 bottom-3 text-blue-900 text-sm" 
                      onClick={() => copyText('TTYYI39987NXHBX')}>Copy</button>
                  </div>

                 <div className="form-group md:col-span-2">
                      <label>USDT Amount to Send</label>
                      <div className="py-1 bg-gray-50 text-gray-30 border rounded-xl border-gray-100 text-center flex items-center justify-center">
                        <div className="flex justify-center relative">
                            <div className="font-medium flex absolute top-3 -left-2 text-lg font-semibold justify-end items-center space-x-2 text-gray-900">
                              <img src="/assets/svgs/usdt.svg" /> 
                              <p>USDT</p>
                            </div>
                            <input type="text" className="form-control text-xl pl-20 w-[14ch] font-bold bg-gray-50 text-gray-900 border-0 " defaultValue={14.09}   />
                        </div>
                      </div>
                      <p
                        className="text-sm text-green-600">
                          Inclusive of USDT 2 transaction fee
                      </p>
                  </div>


                   <div className="form-group md:col-span-2">
                      <button className="btn w-full bg-blue-900 py-4 rounded-lg" type="submit">I have made transfer</button>
                  </div>


                   <div className="form-group md:col-span-2 ">
                      <button 
                        className={`btn w-full py-1 text-blue-900`} 
                        onClick={() => setIsOpen()}
                        type="button"
                        >
                          Cancel
                        </button>
                  </div>

            </form>
        </Modal>
  )
}

export default Step4;