import {useState, useEffect, useContext } from "react";
import Deposit from "./Deposit";
import Withdrawal from "./Withdrawal";
import {ContextApi} from "/src/components/ContextApi";

const Home = ( {exchangeRate} ) => {

  const [selected,setSelected] = useState('Deposit');
  const { transactionData, setTransactionData } = useContext(ContextApi);

  useEffect(() => {
    //Save current exchange rate to user Context
    setTransactionData({
      ...transactionData,
      exchangeRate: exchangeRate,
      type : selected,
    })

  },[selected])

  return (
    <aside className="lg:px-10  z-50 w-full md:w-3/5 text-xl text-white space-y-5 pt-5">

                <h2 className="text-center relative after:w-14 after:absolute after:h-1 after:rounded-lg after:bg-white after:left-[45%] after:-top-6 text-medium">What would you like to do? </h2>
                <nav className="grid md:grid-cols-2 gap-5">
                  <Deposit  setSelected={() => setSelected('Deposit')} selected={selected}  />

                  <Withdrawal  setSelected={() => setSelected('Withdrawal')} selected={selected}   />

                </nav>
               
               
                
              </aside>
  )
}



export default Home;
