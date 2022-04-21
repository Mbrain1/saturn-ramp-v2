import { useState, useEffect, useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import axios  from "/helpers/axios";
import Step1 from "./deposit/Step1";
import Step2 from "/src/components/transaction/Auth";
import Step3 from "./deposit/Step3";
import Step4 from "./deposit/Step4";
import Step5 from "./deposit/Step5";
import {useRouter} from "next/router";
import { alert, copyText } from "/helpers/toast";

const Deposit = ({ selected, setSelected}) => {

  const [isOpen,setIsOpen] = useState({step1: false, step2: false, step3: false,step4: false, step5: false});
  const { transactionData, setTransactionData } = useContext(ContextApi);

  useEffect(() => {

    if(transactionData.type == "Deposit"){
        setIsOpen({...isOpen,step3: !isOpen.step3})
    }

  },[transactionData.isLogin])


  return (
    <div>  
          <Step1 
            isOpen={isOpen.step1} 
            setIsOpen={() => setIsOpen({...isOpen,step1: !isOpen.step1})}
            next={() => setIsOpen({...isOpen,step2: !isOpen.step2,step1: !isOpen.step1})} 
          />

          <Step2 
            isOpen={isOpen.step2} 
            setIsOpen={() => setIsOpen({...isOpen,step2: !isOpen.step2})}
            next={() => setIsOpen({...isOpen,step3: !isOpen.step3,step2: !isOpen.step2})}
            />

          <Step3 
            isOpen={isOpen.step3} 
            setIsOpen={() => setIsOpen({...isOpen,step3: !isOpen.step3})}
            next={() => setIsOpen({...isOpen,step4: !isOpen.step4,step3: !isOpen.step3})}
            back={() => setIsOpen({...isOpen,step3: !isOpen.step3,step1: !isOpen.step1})}
            />

          <Step4 
            isOpen={isOpen.step4} 
            setIsOpen={() => setIsOpen({...isOpen,step4: !isOpen.step4})}
            next={() => setIsOpen({...isOpen,step5: !isOpen.step5,step4: !isOpen.step4})}
            back={() => setIsOpen({...isOpen,step4: !isOpen.step4,step3: !isOpen.step3})}
            />
            
            <Step5 
              isOpen={isOpen.step5} 
              setIsOpen={() => setIsOpen({...isOpen,step5: !isOpen.step5})}
              // next={() => setIsOpen({...isOpen,step5: !isOpen.step5,step5: !isOpen.step5})}
              back={() => setIsOpen({...isOpen,step5: !isOpen.step5,step4: !isOpen.step4})}
              />

                    <button 
                      className={`py-10 px-10 rounded-2xl flex flex-col items-center text-center space-y-3 hover:bg-blue-900 ${selected === "Deposit" ? 'bg-blue-900 ' : 'bg-gradient-gray'}`} 
                      onClick={() => {
                        setSelected()
                        setIsOpen({...isOpen,step1: !isOpen.step1})
                      }}>

                    <img src={`/assets/svgs/deposit.svg`} />
                     <div className="font-semibold">Deposit</div>
                     <p>Transfer Naira to receive USDT in wallet</p>
                    </button>
        </div>
  )
}




export default Deposit;
