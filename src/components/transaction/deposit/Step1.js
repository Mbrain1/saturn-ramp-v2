import {useState,useEffect,useContext} from "react";
import {ContextApi} from "/src/components/ContextApi";
import { copyText } from "/helpers/toast";
import { RiInformationFill } from "react-icons/ri";
import Info from "/src/components/transaction/inc/Info";
import Modal from "/src/components/Modal";

const Step1 = ({isOpen,setIsOpen,next}) => {

  const [isProceed,setIsProceed] = useState(false)
  const {transactionData,setTransactionData} = useContext(ContextApi);
  const [isInnerOpen,setIsInnerOpen] = useState({info: false});

   const validateAddress = () => {
    const validAddr = new RegExp("T[A-Za-z0-9]{33}");
    return validAddr.test(transactionData.address) && transactionData.address.length == 34 ? true : false;
  }
  
    useEffect(() => {
      //Save current exchange rate to user Context
      setTransactionData({
        ...transactionData,
        usdt: (transactionData.amount/transactionData.exchangeRate).toFixed(2),
      })

      if(validateAddress() && (transactionData.amount/transactionData.exchangeRate) >= 10) return setIsProceed(true);
         
        setIsProceed(false);

  },[transactionData.amount,transactionData.address])

   const handleSubmit = (e) => {
      e.preventDefault();
      next();
   }


  return (
    <div>
    <Info 
    isOpen={isInnerOpen.info}
    title='Deposit Fee'
    content='1 USDT fee will be deducted from the  USDT amount to be withdrawn. The fee is the transaction commission.' 
    setIsOpen={() => setIsInnerOpen({...isInnerOpen,info: !isInnerOpen.info}) } />

    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <header className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Deposit Naira to Receive USDT</h2>
                        </div>
                        <p>Transfer Naira to receive USDT in your wallet address</p>
            </header>

            <form className={`grid md:grid-cols-2 gap-4 text-base text-gray-200`} onSubmit={(e) => handleSubmit(e)}>

                  <div className="form-group md:col-span-2 border-t border-b border-gray-100 py-3">
                    Exchange Rate: <strong>N{ transactionData.exchangeRate }</strong>
                  </div>

                   <div className="form-group md:col-span-2">
                      <label>How much Naira do you want to deposit? </label>
                      <input 
                        defaultValue={transactionData.amount}  
                        onChange={(e) => setTransactionData({...transactionData,amount: e.target.value})}
                        type="text" 
                        className="form-control text-right py-2 font-bold  bg-gray-50  text-gray-30 border pl-24 "  />
                      <div 
                        className="absolute top-8 left-3 font-medium  flex justify-center items-center space-x-2 text-gray-30">
                        <img src="/assets/svgs/ng.svg" /> 
                        <span>NGN</span>
                      </div>
                  </div>

                  <div className="form-group md:col-span-2">
                      <label> USDT Value</label>
                      <input 
                        type="text" 
                        value={(transactionData.amount/transactionData.exchangeRate).toFixed(2)}
                        className="form-control text-right py-2 font-bold  bg-gray-50  text-gray-30 border pl-24" />
                      <div className="absolute top-8 left-3 font-medium  flex justify-center items-center space-x-2 text-gray-30">
                        <img src="/assets/svgs/usdt.svg" /> 
                        <span>USDT</span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setIsInnerOpen({...isOpen,info: !isInnerOpen.info}) }
                        className="text-xs text-green-600 flex items-center">
                         <RiInformationFill size={20} /> <span>1 USDT Network fee will be deducted</span>
                      </button>
                  </div>

                   <div className="form-group md:col-span-2">
                      <label>USDT (TR-20)</label>
                      <input type="text" 
                        onChange={(e) => setTransactionData({...transactionData,address: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border pr-12"  />
                      <button type="button" className="absolute right-2 bottom-3 text-blue-900 text-sm" onClick={() => copyText(transactionData.address)}>Copy</button>
                  </div>

                   <div className="form-group md:col-span-2 ">
                      <button 
                        disabled={!isProceed}
                        className={`btn w-full py-5 ${isProceed == false ? 'cursor-not-allowed bg-gray-800' : 'bg-blue-900'}`} 
                        type="submit">
                          Continue
                        </button>
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
    </div>
  )
}

export default Step1;