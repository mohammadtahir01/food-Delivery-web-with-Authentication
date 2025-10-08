import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "../css/showCard.css";
import axios from "axios"

function ResturentCard() {
    const [val, setVal] = useState([]);

    const onload = async () => {
        let api = "http://localhost:3000/resturant";
        let res = await axios.get(api);
        console.log(res.data);
        setVal(res.data);
    }
    useEffect(() => {
        onload();
    }, [])

    const ans = val.map((item) => {
        return (
            <Card className="bg-dark text-white" style={{ height:"200px" }}>
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



// import { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "react-bootstrap/Card"; // make sure bootstrap is installed

// function ResturentCard() {
//   const [val, setVal] = useState([]);

//   const onload = async () => {
//     let api = "http://localhost:3000/resturant";
//     let res = await axios.get(api);
//     setVal(res.data); // ✅ update state here
//     console.log(res.data);
//   };

//   useEffect(() => {
//     onload();
//   }, []);

//   return (
//     <>
//       {val.map((item, i) => (
//         <Card key={i} className="bg-dark text-white mb-3">
//           <Card.Img src={item.image} alt="Card image" />
//           <Card.ImgOverlay>
//             <Card.Title>{item.name}</Card.Title>
//             <Card.Text>{item.cuisine}</Card.Text>
//             <Card.Text>Last updated 3 mins ago</Card.Text>
//           </Card.ImgOverlay>
//         </Card>
//       ))}
//     </>
//   );
// }

// export default ResturentCard;
