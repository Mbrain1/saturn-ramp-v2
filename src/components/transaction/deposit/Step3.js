import { useState, useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { RiInformationFill } from "react-icons/ri";
import Info from "/src/components/transaction/inc/Info";
import Back from "/src/components/transaction/inc/Back";
import Modal from "/src/components/Modal";

const styles = {
  label : `text-sm text-light opacity-80`,
  labelDesc : `font-medium text-base text-gray-900`,
  sectionTitle: `border-t md:col-span-2 border-gray-100 pt-2 w-full font-medium text-gray-900`
}

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
    title='Deposit Fee'
    content='1 USDT fee will be deducted from the  USDT amount to be withdrawn. The fee is the transaction commission.' 
    setIsOpen={() => setIsInnerOpen({...isInnerOpen,info: !isInnerOpen.info}) } />
    
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <header className="space-y-2">
                         <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Deposit Transaction Summary</h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Confirm transaction details</p>
            </header>

             <form className={`grid md:grid-cols-2 gap-4 text-gray-30`} onSubmit={(e) => handlePayment(e)}>
               
                  <div className="form-group md:col-span-2">
                      <div className="text-base py-3 bg-gray-50 text-gray-30 border rounded-xl border-gray-100 text-center flex flex-col items-center justify-center">
                        <div className="font-medium">USDT you will receive</div>
                        <div className="flex justify-center relative">
                            <div className="font-medium text-gray-900 flex absolute top-3 -left-2  font-semibold justify-end items-center space-x-2">
                              <img src="/assets/svgs/usdt.svg" /> 
                              <p>USDT</p>
                            </div>
                            <input type="text" className="form-control pl-20 w-[14ch] font-bold bg-gray-50 text-gray-900 text-lg border-0 " defaultValue="0.00"   />
                        </div>
                      </div>
                      
                        <button 
                        type="button"
                        onClick={() => setIsInnerOpen({...isOpen,info: !isInnerOpen.info}) }
                        className="text-xs text-green-600 flex items-center">
                         <RiInformationFill size={20} /> <span>1 USDT Network fee already deducted. </span>
                      </button>
                  </div>

                   <div className={styles.sectionTitle}>
                     Your Information 
                   </div>

                   <div className="form-group break-words">
                      <h3 className={styles.label}>Wallet Address</h3>
                      <p className={styles.labelDesc}>{transactionData.address}</p>
                  </div>

                   <div className="form-group">
                      <h3 className={styles.label}>Mobile Number</h3>
                      <p className={styles.labelDesc}>{transactionData.phone_number}</p>
                  </div>

                   <div className="form-group md:col-span-2">
                      <h3 className={styles.label}>Name </h3>
                      <p className={styles.labelDesc}>{transactionData.account_name}</p>
                  </div>

                   <div className="form-group">
                      <h3 className={styles.label}>Email</h3>
                      <p className={styles.labelDesc}>{transactionData.email}</p>
                  </div>
                 
                
                   <div className="form-group md:col-span-2">
                      <button className="btn w-full bg-blue-900 py-4 rounded-lg" type="submit" >Continue to make payment</button>
                  </div>

            </form>
       </Modal>
    </>
  )
}

export default Step3;