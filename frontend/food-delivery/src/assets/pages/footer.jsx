import logo from "../images/logo2.png";
import logo2 from "../images/playStore.png"
import logo3 from "../images/appleStore.png"
//react icons
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "#C8C8C8", padding: "1rem 0 0 0" }}>
                <div>
                    <div>
                        <img src={logo} alt="logo" style={{ height: "100px" }} />
                    </div>
                    <div style={{position:"relative", bottom: "22px"}}>
                        <div>
                            <img src={logo2} alt="playStore" style={{ height: "65px" }} />
                            <img src={logo3} alt="appleStore" style={{ height: "30px" }} />
                        </div>
                        <div>
                            <p>company # 493900 - 45 Register with <br /> house of company</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h5>Get Exclusive Deal in your inbox</h5>
                    </div>
                    <div style={{ display: "grid", padding:"1rem 0 0 0" }}>
                        <div>
                            <input type="enail" name="email" placeholder="mdtahir123@gmail.com" 
                            style={{padding:"5px 5px 5px 10px",border:"none",borderRadius:"10px",outline:"none"}}/>
                            <button style={{ backgroundColor: "orange",border:"none",padding:"5px",borderRadius:"1rem" }}>subscribe</button>
                        </div>
                        <p>we want spam, read our <a href="#"> email policy</a></p>
                        <div style={{fontSize:"1.8rem",display:"flex",justifyContent:"space-evenly"}}>
                            <FaFacebookSquare />
                            <RiInstagramFill />
                            <FaSnapchatGhost />
                            <FaTiktok />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Legal Pages</h5>
                    </div>
                    <div style={{ display: "grid", padding:"1rem 0 0 0" }}>
                       <p><a href="#">Terms and condtions</a></p> 
                       <p><a href="#">Privcy</a></p> 
                       <p><a href="#">Cookies</a></p> 
                        <p><a href="#">Modern slevery statment</a></p>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Impotent Links</h5>
                    </div>
                    <div style={{ display: "grid", padding:"1rem 0 0 0" }}>
                        <p><a href="#">Get Help</a></p>
                        <p><a href="#">add your restaruant</a></p>
                        <p> <a href="#">Sign up to deliver</a></p>
                        <p><a href="#">Create a business account</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
