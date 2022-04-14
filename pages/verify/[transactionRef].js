import {useState,useEffect,useContext} from "react";
import Transaction from "/src/components/transaction/Index";
import axios  from "/helpers/axios";
import {ContextApi} from "/src/components/ContextApi";
import { alert, copyText } from "/helpers/toast";

const Home = ({exchangeRate,result,reference}) => {

  const {fiatAmount,customerUsdtWallet,agentmonoID} = result;
  const {transactionData,setTransactionData} = useContext(ContextApi);
  const [status, setStatus] = useState(false);
  const [countDown, setCountDown] = useState(30);
  const useInterval = setInterval;


    const copyTransactionLink = () => {

    const textField = document.createElement('textarea')
    textField.innerText = window.location.hostname + '/verify/' + reference; //Transaction link
    document.body.appendChild(textField)

    if (window.navigator.platform === 'iPhone') {
      textField.setSelectionRange(0, 99999);
    } else {
      textField.select();
    }

    document.execCommand('copy')
    textField.remove()

    alert("copied!")

  }


  useEffect(() => {



   if(status) return; //If status is true, then dont execute this code anymore

   const countDownTimer  = useInterval(() => setCountDown((prevCounter) => prevCounter <= 0 ? 30 : --prevCounter),1000)

    const refresh  = useInterval(() => {

        

        setTransactionData({...transactionData,loading: true})
         axios({
          method: "POST",
          url: `verify-payments`,
          data: {
            referenceID : reference,
            agentmonoID : agentmonoID,
            amount: fiatAmount
          }
          })
          .then((res) => {
            const {status}  = res.data.data;

            setStatus(res.data.data.paymentStatus != 'Failed' ? true : false)
            setTransactionData({...transactionData,loading: false})

          })
          .catch((err) => console.log(err.message));


    },30000);


    return  () => {
        clearInterval(refresh);
        clearInterval(countDownTimer);
      }


  },[status])


  return (
    <>
    <section className="bg-blue-900 max-h-[80vh] text-white">
        <div className="container space-y-12">


            <div className="space-y-5 mx-auto text-center md:w-2/3">
              <h1 className="text-3xl md:text-[2.5rem] font-black leading-tight">Track and see your transactions progress  instantly</h1>
            </div>

           <div className="flex justify-center ">

             <div className="text-gray-20 rounded-2xl bg-white p-7 relative z-[200] md:w-2/3  space-y-5 shadow-xl">
            <header className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-bold">Transaction Progress  </h2>
                          {/*<button onClick={() => setIsOpen()}><img src="/assets/svgs/times.svg" /></button>*/}
                        </div>
                        <p>keep this page open or copy this link to check transaction status</p>
            </header>

            <form className={`grid grid-cols-1 text-gray-30`}>
                  

                {!status &&
                   <div className="flex justify-end  font-medium text-gray-300 mb-2">
                    <span className="text-sm">Transaction Status will refresh in {countDown} seconds</span>
                  </div>
                }


                  <div className={`form-group border-l-2 px-5  pb-6 after:content-[''] after:w-4 after:h-4 ${!status ? 'border-blue-900 after:bg-blue-900' : 'after:bg-gray-800 border-stone-300' } after:rounded-full after:absolute after:-left-2 after:top-0`}>
                      <h3 className="text-lg text-gray-20 font-bold">We are sending {(fiatAmount/exchangeRate) - 1} USDT  to wallet Address</h3>
                      <div className={`text-lg  font-medium text-gray-100`}>{customerUsdtWallet}</div>
                      <div className={`text-sm font-semibold ${!status && 'text-blue-900'}`}>Pending</div>
           
                  </div>

                 


                  <div className={`form-group border-l-2 px-5 pb-6 after:content-[''] after:w-4 after:h-4  after:rounded-full after:absolute after:-left-2 after:top-0 ${status ? 'border-blue-900 after:bg-blue-900' : 'after:bg-gray-800 border-stone-300' }`}>
                      <h3 className={`text-lg text-gray-20 font-bold`}>We’ve recieved and converted your naira</h3>
                      <div className={`text-sm font-semibold  ${status && 'text-blue-900'}`}>Done</div>
                  </div>

                   <div className={`form-group border-l-2 px-5  pb-6 after:content-[''] after:w-4 after:h-4 after:rounded-full after:absolute after:-left-2 after:top-0     before:content-[''] before:w-4 before:h-full before:bg-white  before:absolute before:-left-2 before:top-0  ${status ? 'border-blue-900 after:bg-blue-900' : 'after:bg-gray-800 border-stone-300' }`}>
                      <h3 className={`text-lg text-gray-20 font-bold`}>You sent N{fiatAmount}</h3>

                      <div className={`text-sm font-semibold  ${status && 'text-blue-900'}`}>Sent</div>
                  </div>


                
                   <div className="form-group mt-5">
                      <button 
                        className={`btn w-full bg-blue-900 py-5 rounded-xl`}
                        type="button" 
                        onClick={() => copyTransactionLink()}>Copy  Transaction link</button>
                  </div>
            </form>
      </div>

           </div>


           <footer className="py-5">
            <div className="grid grid-cols-1 g-5 font-bold text-center text-gray-300">
                <p>© 2022 Saturn Blockchain labs. All Rights Reserved.</p>
                <p>infodesk@ Saturn Blockchain labs.com</p>
            </div>
    </footer>

        </div>
    </section>



    </>
  )
}


export const getServerSideProps = async (context) => {

  const {id, transactionRef,amount} = context.query;

  const res = await axios.post(`verify-payments`,{
    referenceID : transactionRef,
    agentmonoID : id,
    amount : amount
     });

  const  exchangerate = await axios.get(`exchange`);

  if(res.data.hasOwnProperty('error')){
    const {status} = res.data.error;
    if(status >= 400 || status <= 499){
        return {
          notFound: true
        }
    }
  }


  return {
    props: {
      result : res.data.data,
      reference : transactionRef,
      exchangeRate: exchangerate.data.data.exchangerate
    },
  };


}


export default Home;
