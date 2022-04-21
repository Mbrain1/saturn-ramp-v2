import Navbar from './navbar.js';
import {Footer1,Footer2} from './footer.js';
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  

  return (
     <div className="page-wrapper">
        
            <Navbar isContainer={true} />
            {children}
             <Footer1 />
    </div>
  )
}