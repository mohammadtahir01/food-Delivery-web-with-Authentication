import axios from "axios";
import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../images/staticPhoto.jpg"



function PizzaCard(){
    const [val, setVal] = useState([]);

    const onload =async()=>{
        let api = "http://localhost:3000/Pizza&Food";
        let res = await axios.get(api);
        console.log(res.data);
        setVal(res.data.data);
    }

    useEffect(()=>{
        onload();
    },[])
    const ans = val.map((item)=>{
        return(
        <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body style={{padding:"10px",fontSize:"13px"}}>
         <Card.Title style={{fontSize:"0.8rem"}}><b>{item.name}</b></Card.Title>
        <Card.Text style={{color:"#F28C28"}}>
        {item.restaurants}
        </Card.Text>
      </Card.Body>
    </Card>
    )
    })

    return(
        <>
        <div style={{padding:"1.5rem 0px 1rem 3.7rem"}}>
           <h5><b>Food Delivery Popular Categories</b></h5>
        </div>
         <div style={{display:"flex",justifyContent:"space-evenly", padding:"1rem 4rem 1rem 4rem",gap:"0.5rem"}}>
            {ans}
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px"}}>
            <img src={logo} alt="logo" style={{width: "90%", padding:"1rem",height:"400px",borderRadius:"2rem"}} />
        </div>
        </>
       
    )
    
}
export default PizzaCard;