import { useContext, useState } from "react";
import Transaction from "/src/components/transaction/Index";
import axios  from "/helpers/axios";
import {ContextApi} from "/src/components/ContextApi";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Home = ({exchangeRate}) => {

  const {transactionData} = useContext(ContextApi);

  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      message: ''
    })

     const schema = yup.object({
      ['First Name'] : yup.string().required(),
      ['Last Name'] : yup.string().required(),
      ['Mobile Number'] : yup.string().required().min(9),
      ['Email'] : yup.string().required().email(),
      ['Message'] : yup.string().required(),
     })

      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver : yupResolver(schema)
      });

  const handleMessage = () => {

  }


  return (
    <>

    <section className="bg-blue-500 min-h-[80vh] relative text-white">
        <div className="container space-y-12 py-5 md:py-12">


            <div className="space-y-5 mx-auto text-center md:w-1/2">
              <h1 className="text-3xl md:text-6xl font-bold leading-snug">Deposit & Withdraw Naira on Saturn Ramp</h1>
              <p className="text-lg text-blue-400">Use  Saturn Ramp to fund and withdraw from your USDT wallet on any platform, it's quick and easy with no extra fees.
              </p>
            </div>

           <div className="flex justify-center relative z-[1]">

             <Transaction exchangeRate={exchangeRate} />

           </div>
        </div>

        <img src={`/assets/svgs/usdt-circle-light-green.svg`} className="bounce-1 absolute z-0 w-10 h-10 md:h-auto md:w-auto" />
        <img src={`/assets/svgs/naira-circle-lighter-green.svg`} className="bounce-2 absolute z-0 w-16 h-16 md:h-auto md:w-auto" />
        <img src={`/assets/svgs/naira-circle-light-green.svg`} className="bounce-3 absolute z-0 w-20 h-20 md:h-auto md:w-auto" />
        <img src={`/assets/svgs/usdt-circle-lighter-green.svg`} className="bounce-4 absolute z-0" />
        <img src={`/assets/svgs/circular-bg.svg`} className="absolute z-0 -top-[20%] opacity-10" />
        <img src={`/assets/svgs/circular-bg.svg`} className="absolute z-0 -left-[60%] -bottom-[20%] opacity-10" />

        
    </section>



   <section className="py-16 bg-blue-500 space-y-10 relative">
    <header className="flex justify-center relative">
       <h2 className="font-bold text-3xl md:text-4xl text-center text-white ">How To Use SaturnRamp</h2>
        <img src={`/assets/svgs/oval-bg.svg`} className="absolute z-0 -top-12" />
     </header>

     <div className="container grid md:grid-cols-2 gap-y-10 gap-x-5 ">

        <div className="rounded-3xl py-8 font-medium text-base md:text-lg space-y-10">
            <header className="flex justify-center">
                <h2 className="font-medium text-xl md:text-2xl text-center  text-white">How to Deposit Naira on any plaform</h2>
            </header>

            <ul className="space-y-7">

              {[
                {id:1,content: 'Enter the amount you want to deposit in Naira and the equivalent USDT amount would be sent to any wallet of your choice on any platform'},
                {id:2,content: 'Enter your USDT wallet of choice (TRC-20) click continue and then enter your email and platform of choice'},
                {id:3,content: 'Make a simple bank transfer of the Naira amount to the bank account number provided and wait a few seconds for the USDT to show up in your wallet'}
              ].map((item,index)=>
                    <li key={index} className="min-h-[120px] flex space-x-4 items-start justify-start bg-blue-400 rounded-2xl px-5 py-5">
                      <div><button className="font-bold text-xl md:text-2xl">{item.id}</button> </div>
                      <p className="text-gray-500">
                        {item.content}
                      </p>
                  </li>
                )}
            </ul>
        </div>

        <div className="rounded-3xl py-8 font-medium text-base md:text-lg space-y-10 flex flex-col justify-center ">
            <header className="flex items-center justify-center relative">
                <h2 className="font-medium text-xl md:text-2xl text-white text-center">How to Withdrawal Naira on any plaform</h2>
            </header>
            <ul className="space-y-7">
              {[
                {id:1,content: 'Enter the amount you want to deposit in USDT and the equivalent Naira amount would be sent to any bank account provided.'},
                {id:2,content: 'Enter your bank information you want the naira amount to be deposited into and a valid email for transaction notification.'},
                {id:3,content: 'Transfer of the USDT amount to be converted the USDT wallet address (TRC-20) provided and wait a few seconds for the Naira amount to show in your bank account.'}
              ].map((item,index)=>
                    <li key={index} className="min-h-[120px] flex space-x-4 items-start justify-start bg-pink-200 rounded-2xl px-5 py-5">
                      <div><button className="font-bold text-xl md:text-2xl">{item.id}</button> </div>
                      <p className="text-gray-500">
                        {item.content}
                      </p>
                  </li>
                )}
            </ul>
        </div>


     </div>


        <img src={`/assets/svgs/usdt-circle-light-green.svg`} className="bounce-1 absolute z-0 w-10 h-10 md:h-auto md:w-auto" />
        <img src={`/assets/svgs/naira-circle-light-green.svg`} className="bounce-3 absolute z-0 w-20 h-20 md:h-auto md:w-auto" />
         <img src={`/assets/svgs/circular-bg.svg`} className="absolute z-0 top-[10%] opacity-10" />
        <img src={`/assets/svgs/space.svg`} className="absolute z-0 left-0 -bottom-10 opacity-20" />
   </section>


      <section className="py-12 space-y-10 bg-blue-500 text-white">

      <header className="mx-auto  text-center">
        <h1 className="text-xl md:text-2xl font-bold leading-snug">We are more than happy to <br /> help out. </h1>
      </header>

     <div className="container md:w-1/2 ">

     <form className={'grid md:grid-cols-2 gap-4'} onSubmit={handleSubmit(handleMessage)}>

             {[
             {type : 'firstName', value: 'First Name'},
             {type : 'lastName', value: 'Last Name'},
             {type : 'email', value: 'Email'},
             {type : 'mobileNumber', value: 'Mobile Number'},
             {type : 'message', value: 'Message'}
             ].map((item, index) =>
                  <div className={`form-group ${index > 3 ? 'md:col-span-2' : 'md:col-span-1'}`} key={index}>
                      <label>{item.value}</label>
                      {index > 3 ? 
                        <textarea
                        {...register(item.value)}
                        className="form-control resize-none py-2 font-medium  bg-gray-50 border"
                        rows={5}
                        onChange={(e) => setFormData({ ...formData, [item.type]: e.target.value })}></textarea>

                        :

                      <input
                        type="text"
                        {...register(item.value)}
                        className="form-control py-2 font-medium  bg-gray-50 border"
                        onChange={(e) => setFormData({ ...formData, [item.type]: e.target.value })}
                        />
                      }
                        <p className="error">{errors[item.value]?.message}</p>
                  </div>
             )}

            <div className="form-group md:col-span-2">
                  <button className={'btn w-full py-3 bg-blue-900 '} type="submit">Send Message</button>
            </div>

     </form>


     </div>
     
   </section>


    <section className="py-12 space-y-10 bg-gray-100">

      <header className="mx-auto  text-center">
        <h1 className="text-2xl md:text-4xl font-black leading-snug text-blue-700">Got Questions? <br/> We’ve got answers</h1>
      </header>

     <div className="container grid md:grid-cols-2 gap-6 ">

     {[
      {
       question: "Who owns Saturn Ramp?",
       answer: "Saturn Ramp is owned by Saturn Blockchain Labs, a global company that invest and build tools used by founders and companies needed to scale crypto products in emerging markets"
      },
      {
       question: "What is the minimum transaction on  Saturn Ramp?",
       answer: "10 USDT"
      },
      {
       question: "How long does a transaction take ?",
       answer: "Typically less than 5 minutes"
      },
      {
       question: "Do you need any verification or sign up to use Saturn Ramp?",
       answer: "No user verification or sign up is required"
      },
      ].map((item,index) => 

     <div key={index} className="border-2 border-blue-300 bg-white rounded-3xl  px-5 md:px-10 py-5 space-y-2 font-medium ">
       <h2 className="text-blue-700 text-2xl font-bold">{item.question}</h2>
       <p className="text-gray-200">{item.answer}</p>
     </div>)}



     </div>
     
   </section>
    </>
  )
}


export const getServerSideProps = async () => {

  const res = await axios.get(`exchange`);

  return {
    props: {
      exchangeRate : res.data.data.exchangerate,
    },
  };


}


export default Home;
