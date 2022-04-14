import { useState, useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { RiInformationFill } from "react-icons/ri";
import Back from "/src/components/transaction/inc/Back";
import { copyText } from "/helpers/toast";
import Link from "next/link";

const styles = {
  progress : `w-1/2 h-1 bg-gray-100 rounded-lg`,
  activeProgress : `bg-green-600`,
  terminateProgress : `bg-red-500`
}

const Step5 = ({ isOpen, setIsOpen, next, back}) => {

  const {transactionData,setTransactionData} = useContext(ContextApi);

  const handlePayment = (e) => {
      e.preventDefault();
  }

  return (
    <>
     <section className={`modal-wrapper ${isOpen ? 'show-modal' : 'hide-modal'} `}>

      <div className="modal-inner-wrapper">

      <div className="modal-body">
            <header className="space-y-2">
                         <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">Transaction Progress </h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Track your transaction at every moment </p>
            </header>

             <form className={`grid md:grid-cols-2 gap-4 md:gap-7 text-gray-30 text-base`} onSubmit={(e) => handlePayment(e)}>
                
                 
                   <div className="form-group md:col-span-2">
                      <div className="font-semibold">You sent 40,000 Naira</div>
                      <div className="flex items-center space-x-2">
                         <div className={`${styles.progress} ${styles.activeProgress}`}></div><span>Sent</span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <div className="font-semibold">Payment Recieved and Converting Your Naira</div>
                      <div className="flex items-center space-x-2">
                         <div className={`${styles.progress} ${styles.terminateProgress}`}></div><span>Processing </span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <div className="font-semibold">Transferring 12.09 USDT</div>
                       <p>Wallet ID: TTYYYYYJJU3340010983</p>
                      <div className="flex items-center space-x-2">
                         <div className={`${styles.progress}`}></div><span>Pending</span>
                      </div>
                  </div>


                   <div className="form-group md:col-span-2">
                      <button className="btn w-full bg-blue-900 py-4 rounded-xl" type="submit">Copy  Transaction link</button>
                  </div>

                   <div className="form-group md:col-span-2 text-center">
                      Having issues? <Link href="/"><a className="text-blue-900 font-semibold">Click Here</a></Link> to Chat with our support.  
                  </div>

            </form>
        </div>
      </div>
  </section>
    </>
  )
}

export default Step5;