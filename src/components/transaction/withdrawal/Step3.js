import { useState, useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { RiInformationFill } from "react-icons/ri";
import Info from "/src/components/transaction/inc/Info";
import Back from "/src/components/transaction/inc/Back";

const Step3 = ({ isOpen, setIsOpen, next, back}) => {

  const {transactionData,setTransactionData} = useContext(ContextApi);
  const [isInnerOpen,setIsInnerOpen] = useState({info: false});

  const handlePayment = (e) => {
      e.preventDefault();

      next();
  }

  return (
    <>
    <Info 
      isOpen={isInnerOpen.info} 
      title='Withdrawal Fee'
      content='1 USDT fee will be added to the  USDT amount to be sent.'
      setIsOpen={() => setIsInnerOpen({...isOpen,info: !isInnerOpen.info}) } />
     <section className={`modal-wrapper ${isOpen ? 'show-modal' : 'hide-modal'} `}>

      <div className="modal-inner-wrapper">

      <div className="modal-body">
            <header className="space-y-2">
                         <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">Withdrawal Transaction Summary </h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Confirm transaction details</p>
            </header>

             <form className={`grid md:grid-cols-2 gap-4 text-gray-30`} onSubmit={(e) => handlePayment(e)}>
               
                  <div className="form-group md:col-span-2">
                      <div className="py-5 bg-gray-50 text-gray-30 border rounded-xl border-gray-100 text-center flex flex-col items-center justify-center">
                        <div>You will receive</div>
                        <div className="flex justify-center relative">
                            <div className="font-medium flex absolute top-3 left-0 text-lg font-semibold justify-end items-center space-x-2 text-gray-30">
                              <img src="/assets/svgs/ng.svg" /> 
                              <p>NGN</p>
                            </div>
                            <input type="text" className="form-control text-xl pl-20 w-[12ch] font-bold bg-gray-50 text-gray-30 border-0 " defaultValue="0.00"   />
                        </div>
                      </div>
                      
                        <button 
                        type="button"
                        onClick={() => setIsInnerOpen({...isOpen,info: !isInnerOpen.info}) }
                        className="text-xs text-green-600 flex items-center">
                         <RiInformationFill size={20} /> <span>1 USDT Network fee already deducted. </span>
                      </button>
                  </div>

                   <div className="border-t md:col-span-2 border-gray-100 pt-2 w-full font-bold ">
                     Your Information 
                   </div>

                   <div className="form-group md:col-span-2">
                      <label>Bank Name</label>
                      <h3 className="font-medium text-lg">{transactionData.withdrawal.user.bank_name}</h3>
                  </div>

                  <div className="form-group md:col-span-2">
                      <label>Account Number </label>
                      <h3 className="font-medium text-lg">{transactionData.withdrawal.user.account_number}</h3>
                  </div>

                  <div className="form-group">
                      <label>Name </label>
                      <h3 className="font-medium text-lg">{transactionData.withdrawal.user.account_name}</h3>
                  </div>

                   <div className="form-group">
                      <label>Mobile Number</label>
                      <h3 className="font-medium text-lg">{transactionData.withdrawal.user.mobile_number}</h3>
                  </div>
 
                   <div className="form-group md:col-span-2">
                      <label>Email</label>
                      <h3 className="font-medium text-lg">{transactionData.withdrawal.user.email}</h3>
                  </div>
                
                   <div className="form-group md:col-span-2">
                      <button className="btn w-full bg-blue-900 py-4 rounded-xl" type="submit" >Continue to make payment</button>
                  </div>

            </form>
        </div>
      </div>
  </section>
    </>
  )
}

export default Step3;