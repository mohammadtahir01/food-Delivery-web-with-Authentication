import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "../css/showCard.css";
import axios from "axios"
import {useNavigate} from "react-router-dom";

function ResturentCard() {
    const [val, setVal] = useState([]);

    const navigate = useNavigate();

    const onload = async () => {
        let api = "http://localhost:3000/resturant";
        let res = await axios.get(api);
        console.log(res.data.data);
        setVal(res.data.data);

    }
    useEffect(() => {
        onload();
    }, [])


    const cardClick=async(id)=>{
       navigate(`/showRest/${id}`)
    }

    
    const ans = val.map((item,key) => {
        return (
            <Card className="bg-dark text-white" style={{ height:"200px" }} key={key} onClick={()=>cardClick(item._id)}>
                <Card.Img src={item.image} alt="Card image" />
                <Card.ImgOverlay className='bottom-overlay'>
                    <Card.Title>{item.name} </Card.Title>
                    <Card.Text>
                        {item.cuisine}
                    </Card.Text>
                    <div className='discount'>
                    <Card.Text>{item.discount}</Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
        )
    })

    return (
        <>
          <div className='h4'>
            <h4>All offers from Mac'Donal's East London</h4>
             </div>
            <div className="card-grid">
                {ans}
            </div>
           
        </>
    )

}
export default ResturentCard;



