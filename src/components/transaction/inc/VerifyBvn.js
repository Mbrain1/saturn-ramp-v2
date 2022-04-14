import { useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Back from "/src/components/transaction/inc/Back";

const VerifyBvn = ({isOpen,setIsOpen,next, back }) => {
  

  const { transactionData, setTransactionData } = useContext(ContextApi);

    const schema = yup.object({
    ['BVN'] : yup.string().required(),
   })

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver : yupResolver(schema)
    });


    const handleVerification = () => {
      next();
    }

  return (
<section className={`modal-wrapper ${isOpen ? 'show-modal z-[5000]' : 'hide-modal'} `}>

      <div className="modal-inner-wrapper">

      <div className="modal-body sm:w-1/2 md:w-1/3">
            <header className="space-y-2">
                        <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">Verify Your Identity</h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p className="text-base">Bank verification is needed for transactions above 50,000. Please provide your BVN and an OTP will be sent to the mobile number attached to it. </p>
            </header>

           <form className={`grid md:grid-cols-2 gap-4 text-base text-gray-200`}  onSubmit={handleSubmit(handleVerification)}>

                  <div className="form-group md:col-span-2">
                      <label>Enter your BVN </label>
                      <input type="text" 
                        {...register('BVN')}
                        onChange={(e) => setTransactionData({...transactionData,bvn: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border "  />
                        <p className="error">{errors['BVN']?.message}</p>
                  </div>
                   <div className="form-group md:col-span-2 ">
                      <button 
                        className={`btn w-full py-3 bg-blue-900`} 
                        type="submit">
                          Continue
                        </button>
                  </div>
            </form>
      </div>
    </div>
  </section>
  )
}

export default VerifyBvn;