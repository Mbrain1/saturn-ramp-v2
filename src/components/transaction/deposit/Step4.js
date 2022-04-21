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

      next()
  }

  return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <header className="space-y-2">
                         <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Transfer Naira to Recieve USDT</h2>
                        </div>
                        <p>Pay your naira into this account to receive in USDT</p>
            </header>

             <form className={`grid md:grid-cols-2 gap-4 text-gray-30`} onSubmit={(e) => handlePayment(e)}>
                

                 <div className="form-group md:col-span-2">
                      <label>Account Number</label>
                      <input  
                        type="text" 
                        className="form-control py-2 bg-gray-50 font-bold text-gray-900 border" 
                        defaultValue={100000} />
                      <button type="button" className="absolute right-3 bottom-3 text-blue-900 text-sm" onClick={() => copyText('5454')}>Copy</button>
                  </div>
                

              

                   <div className="form-group break-words">
                      <label>Bank Account </label>
                      <h3 className="font-medium text-lg text-gray-900">{transactionData.bank_name}</h3>
                  </div>

                   <div className="form-group break-words">
                      <label>Account name</label>
                      <h3 className="font-medium text-lg text-gray-900">{transactionData.account_name}</h3>
                  </div>

                 <div className="form-group md:col-span-2">
                      <label>Naira amount you have to send</label>
                      <div className="py-1 bg-gray-50 text-gray-30 border-2 rounded-xl border-gray-100 text-center flex items-center justify-center">
                        <div className="flex justify-center relative">
                            <div className="font-medium flex absolute top-3 -left-1 text-lg font-semibold justify-end items-center space-x-2 text-gray-900">
                              <img src="/assets/svgs/ng.svg" /> 
                              <p>NGN</p>
                            </div>
                            <input type="text" className="form-control text-xl pl-20 w-[14ch] font-bold bg-gray-50 text-gray-900 border-0 " defaultValue="1000000"   />
                        </div>
                      </div>
                  </div>


                   <div className="form-group md:col-span-2 space-y-2">
                      <h3 className="font-medium text-lg text-gray-900">Narration</h3>
                      <p className="text-sm">Use this code as reference/narration in other to automate payment confirmation</p>

                      
                      <div className="flex justify-start items-center space-x-1 ">

                      {String("5454").split("").map((item,index) =>

                          <input
                             key={index} 
                             type="text" 
                             className="form-control py-3 w-12 h-12 px-4 font-bold text-lg md:text-2xl font-semibold bg-green-50  text-green-600 border border-green-200" 
                             defaultValue={item} 
                           />

                        )}
                         
                         <button className="btn bg-green-50 font-semibold text-green-900 w-auto h-12 px-2 text-center inline-block rounded-xl text-xs md:text-base" type="button" onClick={() => copyText("5454")}>Copy Code</button>
                      </div>
                     
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