import axios from "axios";
import { useEffect, useState } from "react";
import "../css/ShowCard2.css"


function ShowCard2(){
 const [val,setVal] = useState([]);

 const onload=async()=>{
 
    let api = "http://localhost:3000/burger";
    let res = await axios.get(api);
    console.log(res.data);
    setVal(res.data);

 }

 useEffect(()=>{
    onload();
 },[]);

 const ans = val.map((item)=>{

     return(
        <div className="menu-card" style={{fontSize: "10px", display:"flex",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",
  transition:"transform 0.2s ease",padding:"10px 0px 0px 10px"}}>
      <div className="menu-info">
        <h6 className="menu-title">{item.name}</h6>
        <p className="menu-description" style={{display:"grid",width:"165px"}}>{item.description}</p>
        <p className="menu-price">{item.currency} {item.price}</p>
      </div>
      <div className="menu-image">
        <img src={item.image} alt={item.name} style={{height:"100px"}}/>
        <button className="add-btn">+</button>
      </div>
    </div>
    )
 })

 return(
   <>
   <div style={{padding:"1rem 0px 1rem 7rem"}}>
      <h4>Burger</h4>
   </div>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"1rem"}}>
        {ans}
    </div>
    </>
 )
   
}
export default ShowCard2;