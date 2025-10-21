import { useEffect, useState } from "react";
import axios from "axios";

function Review(){
    const [getReview,setReview] = useState([]);
    
    const onlaod=async()=>{
        let api =`http://localhost:3000/getreviews`;
        let res = await axios.get(api);
        console.log(res.data.data);
        setReview(res.data.data);

    }
    useEffect(()=>{
        onlaod();
    },[]);

    
    return(
        <>
         <h2>Customer Reviews</h2>

      {/* {getReview.length === 0 ? (
        <p>Loading reviews...</p>
      ) : ( */}
        <div style={{display: "flex",gap: "10px",overflowX: "auto",padding: "10px"}}>
        {getReview.map((item, index) => (
            // <div style={{display:"flex",width:"40%"}}>
          <div key={index}
            style={{// card ki width
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      flexShrink: 0 ,width:"40%"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>
              <img
              src={item.profileImage}
              alt="image"
              width="50"
              style={{ borderRadius: "50%" }} />
             <h3>{item.name}</h3>
            <p>
            <b>Location:</b> {item.location}
            </p>
            </div>
             <div>
                <b>Rating:</b> ⭐{item.rating}
            <p>
              
               <b>Date:</b> {item.date}
            </p>
             </div>
            </div>
            <p>{item.review}</p>
          </div>
        //   </div>
          
        ))}
      </div>
       </>
    )
}
export default Review;