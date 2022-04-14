import {useState,useEffect,useContext} from "react";
import Link from "next/link";
import {ContextApi} from "/src/components/ContextApi";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const Signin = ({isOpen,setIsOpen}) => {
  
  const [isProceed,setIsProceed] = useState(false)
  const { transactionData, setTransactionData } = useContext(ContextApi);
  const [isInnerOpen,setIsInnerOpen] = useState({info: false});

    const schema = yup.object({
    ['Password'] : yup.string().required().min(4),
    ['Email'] : yup.string().required().email(),
   })

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver : yupResolver(schema)
    });


    const handleSignin = () => {
      
        setTransactionData({...transactionData,isLogin: !transactionData.isLogin})
        setIsOpen();

    }

  return (
    <>
 <section className={`modal-wrapper ${isOpen ? 'show-modal z-[5000]' : 'hide-modal'} `}>

      <div className="modal-inner-wrapper">

      <div className="modal-body sm:w-1/2 md:w-1/3">
            <header className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">Welcome back</h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Fill in necessary information to set up your account</p>
            </header>

           <form className={`grid md:grid-cols-2 gap-4 text-base text-gray-200`}  onSubmit={handleSubmit(handleSignin)}>

                  <div className="form-group md:col-span-2">
                      <label>Email</label>
                      <input type="text" 
                        {...register('Email')}
                        onChange={(e) => setTransactionData({...transactionData,email: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border "  />
                        <p className="error">{errors['Email']?.message}</p>
                  </div>

                   <div className="form-group md:col-span-2">
                      <label>Password</label>
                      <input type="password" 
                        {...register('Password')}
                        onChange={(e) => setTransactionData({...transactionData,password: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border "  />
                        <p className="error">{errors['Password']?.message}</p>
                  </div>

                   <div className="form-group md:col-span-2 ">
                      <button 
                        className={`btn w-full py-5 bg-blue-900`} 
                        type="submit">
                          Continue
                        </button>
                  </div>

                  <div className="form-group md:col-span-2 text-center">
                      I don’t have an account, <Link href="/"><a className="text-blue-900 font-semibold">Sign Up</a></Link>
                  </div>
            </form>
      </div>
    </div>
  </section>
    </>
  )
}

export default Signin;