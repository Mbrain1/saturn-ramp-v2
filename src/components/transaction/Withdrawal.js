import { useState, useEffect, useContext } from "react";
import Step1 from "./withdrawal/Step1";
import Step2 from "/src/components/transaction/Auth";
import Step3 from "./withdrawal/Step3";
import Step4 from "./withdrawal/Step4";
import Step5 from "./withdrawal/Step5";
import {ContextApi} from "/src/components/ContextApi";

const Withdrawal = ({ selected, setSelected }) => {

  const [isOpen,setIsOpen] = useState({step1: false, step2: false, step3: false,step4: false,step5: false});
  const { transactionData, setTransactionData } = useContext(ContextApi);

   useEffect(() => {

    if(transactionData.type == "Withdrawal"){
        setIsOpen({...isOpen,step3: !isOpen.step3})
    }

  },[transactionData.isLogin])

  return (
    <>  
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
            back={() => setIsOpen({...isOpen,step1: !isOpen.step1,step3: !isOpen.step3})}
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
              back={() => setIsOpen({...isOpen,step5: !isOpen.step5,step4: !isOpen.step4})}
              />


               <button 
                      className={`py-10 px-10 rounded-2xl flex flex-col items-center text-center hover:bg-blue-900 space-y-3 ${selected === "Withdrawal" ? 'bg-blue-900 ' : 'bg-gradient-gray'}`} 
                        onClick={() => {
                          setSelected()
                          setIsOpen({...isOpen,step1: !isOpen.step1})
                        }}>
                    <img src={`/assets/svgs/withdrawal.svg`} />
                     <div className="font-semibold">Withdrawal</div>
                     <p>Transfer Naira to receive USDT in wallet</p>
             </button>
    </>
  )
}

export default Withdrawal;
