import {useState, useEffect} from "react";
import '../styles/globals.css'
import "../styles/index.css";
import Layout from '../src/layouts/index';
import Head from "next/head";
import { ContextApi } from "/src/components/ContextApi";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Loader from "/src/components/Loader";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {

   const router = useRouter();

   const [transactionData,setTransactionData] = useState({
      usdt:0,
      amount:10000,
      loading: false,
      transactionRef:"",
      transactionStatus: false,
      address: "",
      isLogin: false,
      type : '',
      bvn: '',
      email:"",
      name:"",
      password:"",
      phone_number:"",
      confirmPassword : '',
      major_exchange:"",
      exchangeRate: "",
      narration:"",
      agent: {
        agent_id: "",
        bank_name: "",
        account_number: "",
        account_name: "",
        userID: ""
      },
      withdrawal: {
         usdt: 10,
         amount: 0,
         address: "",
         user: {
           email: "",
           bank_name: "",
           account_number: "",
           account_name: "",
           mobile_number: "",
         }

      }
  });

   const [initialTransactionData,setInititalTransactionData] = useState(null);



   useEffect(() => {
      setInititalTransactionData(transactionData)
   },[])

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" />
    </Head>
       <Loader status={transactionData.loading} />
       <ToastContainer />
        <ContextApi.Provider value={{transactionData,setTransactionData,initialTransactionData: initialTransactionData}}>
             <Layout>
                    <Component {...pageProps} />
             </Layout>
        </ContextApi.Provider>
     
    </>
  )
}

export default MyApp
