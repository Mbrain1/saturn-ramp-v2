import {useState,useEffect,useContext} from "react";
import Link from "next/link";
import {ContextApi} from "/src/components/ContextApi";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Modal from "/src/components/Modal";

const Signin = ({ isOpen, setIsOpen, next, signin }) => {
  
  const { transactionData, setTransactionData } = useContext(ContextApi);

    const schema = yup.object({
    ['Name'] : yup.string().required(),
    ['Password'] : yup.string().required().min(4).oneOf([yup.ref('Confirm Password')], 'Your passwords do not match'),
    ['Email'] : yup.string().required().email(),
   })

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver : yupResolver(schema)
    });


    const handleSignup = () => {
      next();
    }

  return (
     <Modal isOpen={isOpen} setIsOpen={setIsOpen} bodyClass="sm:w-1/2 md:w-1/3">
            <header className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold">Create your account</h2>
                          <button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>
                        </div>
                        <p>Fill in necessary information to set up your account</p>
            </header>

           <form className={`grid md:grid-cols-2 gap-4 text-base text-gray-200`}  onSubmit={handleSubmit(handleSignup)}>

                  <div className="form-group md:col-span-2">
                      <label>Full Name</label>
                      <input type="text" 
                        {...register('Name')}
                        onChange={(e) => setTransactionData({...transactionData,name: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border "  />
                        <p className="error">{errors['Name']?.message}</p>
                  </div>

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

                  <div className="form-group md:col-span-2">
                      <label>Confirm password</label>
                      <input type="password" 
                        {...register('Confirm Password')}
                        onChange={(e) => setTransactionData({...transactionData,confirmPassword: e.target.value})}
                        className="form-control py-2 font-medium  bg-gray-50  text-gray-30 border "  />
                        <p className="error">{errors['Confirm Password']?.message}</p>
                  </div>

                   <div className="form-group md:col-span-2 ">
                      <button 
                        className={`btn w-full py-5 bg-blue-900`} 
                        type="submit">
                          Create and Proceed
                        </button>
                  </div>

                  <div className="form-group md:col-span-2 text-center">
                      Already have an account? <button type="button" onClick={() => signin()} className="text-blue-900 font-semibold">Sign In</button>
                  </div>
            </form>
      </Modal>
  )
}

export default Signin;