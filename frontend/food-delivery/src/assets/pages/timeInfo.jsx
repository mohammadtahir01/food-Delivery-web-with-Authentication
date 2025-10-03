import { IoLocationSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoAlarm } from "react-icons/io5";


function TimeInfo(){
    return(
        <>
        <div style={{display:"flex",padding:"1rem",fontSize:"12px"
    ,justifyContent:"center",gap:"4rem",margin:"2rem", boxShadow:"0 2px 8px rgba(0,0,0,0.2)",
  transition:"transform 0.2s ease"}}>
            <div style={{padding:"10px 10px 0px 16px"}}>
                <div style={{padding:"10px"}}>
                    <h5> <IoLocationSharp /> Delivery Informantion</h5>
                </div>
                <div>
                    <p><b>Monday:</b> 12:00 AM - 3:00 AM, 8:00 Am 3:00 AM</p>
                    <p><b>Thuesday:</b> 12:00 AM - 3:00 AM</p>
                    <p><b>Wednesday:</b> 12:00 AM - 3:00 AM</p>
                    <p><b>Thursday:</b> 12:00 AM - 3:00 AM</p>
                    <p><b>Friday:</b> 12:00 AM - 3:00 AM</p>
                    <p><b>Saturday:</b> 12:00 AM - 3:00 AM</p>
                    <p><b>Sunday:</b> 12:00 AM - 3:00 AM</p>
                    <p><b>Estimated time until delivery:</b>20 min</p>
                </div>
            </div>
            <div style={{padding:"10px 10px 0px 16px"}}>
                <div style={{padding:"10px"}}>
                    <h5> <ImProfile /> Contact Informantion</h5>
                </div>
                <div>
                    <p>if you have allergies or other dietary <br />
                     restriction, please contact the resturant. The <br /> 
                        resturant will provide food-specific <br />
                        informantion upon request.
                    </p>
                    <p><b>Phone Number</b> <br /> +934443-43</p>
                     <p><b>Wesite</b> <br /> http:/mcdnaalds.uk./</p>
                </div>
            </div>
            <div style={{backgroundColor:"black",color:"white",padding:"10px 10px 0px 16px",borderRadius:"0px 10px 10px 0px"}}>
                <div style={{padding:"10px"}}>
                    <h5><IoAlarm /> Operational Times</h5>
                </div>
                <div>
                    <p><b>Monday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Thuesday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Wednesday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Thursday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Friday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Saturday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Sunday:</b>12:00 AM 3:00 AM</p>
                    <p><b>Estimated time until delivery:</b>20 min</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default TimeInfo;