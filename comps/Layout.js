import Header from "./Header";
import Footer from "./Footer";
import {MdOutlineArrowUpward} from 'react-icons/md'

const Layout = ({children}) => {

    let topFunction;
    if (typeof window !== "undefined") {
        let mybutton = document.getElementById("myBtn");

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }

        topFunction=()=> {
        document.documentElement.scrollTop = 0; 
        }
      }    

    return ( 
        <div>
            <Header/>
            <button onClick={topFunction} id="myBtn" title="Go to top"><MdOutlineArrowUpward/></button>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;