import { useContext } from "react";
import {ContextApi} from "/src/components/ContextApi";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Back from "/src/components/transaction/inc/Back";
import Modal from "/src/components/Modal";

const VerifyMobile = ({isOpen,setIsOpen,next,back }) => {
  

  const { transactionData, setTransactionData } = useContext(ContextApi);

    const schema = yup.object({
    ['Mobile Number'] : yup.string().required(),
   })

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver : yupResolver(schema)
    });


    const handleVerification = () => {
      next();
    }

  return (
       <Modal isOpen={isOpen} setIsOpen={setIsOpen} bodyClass="sm:w-1/2 md:w-1/3">
            <header className="space-y-2">
                        <Back back={() => back()} />
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Verify Your Mobile Number</h2>
                        </div>
                        <p className="text-base">An OTP code will be sent to your mobile number for verification</p>
            </header>

           <form className={`grid md:grid-cols-2 gap-4 text-base text-gray-200`}  onSubmit={handleSubmit(handleVerification)}>

                  <div className="form-group md:col-span-2">
                      <label>Enter your mobile number</label>
                      <input type="text" 
                        {...register('Mobile Number')}
                        onChange={(e) => setTransactionData({...transactionData,phone_number: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border "  />
                        <p className="error">{errors['Mobile Number']?.message}</p>
                  </div>
                   <div className="form-group md:col-span-2 ">
                      <button 
                        className={`btn w-full py-3 bg-blue-900`} 
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
  )
}

export default VerifyMobile;