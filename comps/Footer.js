import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';

const Footer = () => {
    return ( 
        <footer id="foot">
            <div style={{display:'flex',alignItems:'center'}}>
                <HouseOutlinedIcon/>
                <h3>Real Estate</h3>
            </div>
            <div className="icons">
                <span><BsFacebook/></span>
                <span><BsTwitter/></span>
                <span><BsInstagram/></span>
                <span><BsLinkedin/></span>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;