import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineAlignRight } from "react-icons/ai";

export default function Navbar() {

    const [show, setShow] = useState(false);

    return (
        <>
        <header className="bg-blue-500 py-10">
           <nav className="container flex justify-between items-center text-white text-lg font-medium relative z-50">
               <Link href="/"><a><img src="/assets/images/logo/logo3.png" /></a></Link>

               <ul className={`items-center justify-center ${show ? 'shadow-2xl flex text-base flex-col py-3 bg-blue-500 absolute left-0 z-50 w-full top-12 space-y-5 after:z-10' : 'flex-row md:space-x-10 hidden md:flex'}`}>
                   <li><Link href="/">How It Works</Link></li>
                   <li><Link href="/">FAQS</Link></li>
                   <li><Link href="/">Contact</Link></li>
               </ul>

                <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group" onClick={() => setShow(!show)}>
                      <AiOutlineAlignRight size={20} />
                </button>

           </nav>
        </header>
        </>
      )
}