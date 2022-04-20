import { useState, useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { RiInformationFill } from "react-icons/ri";
import Back from "/src/components/transaction/inc/Back";
import { copyText } from "/helpers/toast";
import Link from "next/link";
import Modal from "/src/components/Modal";

const styles = {
  progress : `w-1/2 h-1 bg-gray-100 rounded-lg`,
  activeProgress : `bg-green-500`,
  terminateProgress : `bg-red-500`,
  progressWrapper : `flex items-center space-x-2 text-xs font-medium`,
  activeProgressWrapper : `text-green-500`
}

const Step5 = ({ isOpen, setIsOpen, next, back}) => {

  const {transactionData,setTransactionData} = useContext(ContextApi);

  const handlePayment = (e) => {
      e.preventDefault();
  }

  return (
     <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <header className="space-y-2">
                         <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Transaction Progress </h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Track your transaction at every moment </p>
            </header>

             <form className={`grid md:grid-cols-2 gap-4 md:gap-7 text-gray-30 text-base`} onSubmit={(e) => handlePayment(e)}>
                
                 
                   <div className="form-group md:col-span-2">
                      <div className="font-semibold">You Sent 12 USDT to Wallet Address</div>
                      <div className={`${styles.progressWrapper} ${styles.activeProgressWrapper}` }>
                         <div className={`${styles.progress} ${styles.activeProgress}`}></div><span>Sent</span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <div className="font-semibold">Payment Recieved and Converting Your Naira</div>
                      <div className={`${styles.progressWrapper}` }>
                         <div className={`${styles.progress}`}></div><span>Processing </span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <div className="font-semibold">USDT Received </div>
                      <div className={`${styles.progressWrapper}` }>
                         <div className={`${styles.progress}`}></div><span>Pending</span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <div className="font-semibold">Naira Sent</div>
                      <div className={`${styles.progressWrapper}` }>
                         <div className={`${styles.progress}`}></div><span>Pending</span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <div className="font-semibold">Your Account Has Been Credited With </div>
                       <p>N10,000,000</p>
                      <div className={`${styles.progressWrapper}` }>
                         <div className={`${styles.progress}`}></div><span>Pending</span>
                      </div>
                  </div>


                   <div className="form-group md:col-span-2">
                      <button className="btn w-full bg-blue-900 py-4 rounded-xl" type="submit">I have received naira amount</button>
                  </div>

                   <div className="form-group md:col-span-2">
                      <button className="btn w-full text-blue-900 py-0 rounded-lg" type="button">Copy transaction  link</button>
                  </div>

                   <div className="form-group md:col-span-2 text-center text-sm">
                      Having issues? 
                      <Link href="/"><a className="text-blue-900 font-semibold">Click Here</a></Link> 
                      to Chat with our support.  
                  </div>

            </form>
        </Modal>
  )
}

export default Step5;