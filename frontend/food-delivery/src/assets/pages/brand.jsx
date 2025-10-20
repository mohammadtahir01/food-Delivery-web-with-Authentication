import { useEffect, useState } from "react";
import axios from "axios"
import Card from 'react-bootstrap/Card';

function BrandName() {
    const [val, setVal] = useState([])

    const onload = async () => {
        let api = "http://localhost:3000/Brand"
        let res = await axios.get(api);
        console.log(res.data);
        setVal(res.data.data);
    }

    useEffect(() => {
        onload();
    }, [])

    const ans = val.map((item) => {

        return (
            <Card>
                <Card.Img variant="top" src={item.image} style={{ height: "150px" }} />
                <Card.Body style={{ backgroundColor: "orange", borderRadius: "0px 0px 10px 10px" }}>
                    <Card.Text>
                        {item.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    })

    return (
        <>
            <div style={{ padding: "1rem 0px 1rem 2rem" }}>
                <h5>Similar Restaurents</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", padding: "1rem" }}>
                {ans}
            </div>

            <div style={{
                display: "flex", justifyContent: "space-evenly", backgroundColor: "orange", margin: "10px 48px 32px 48px",
                padding: "16px 0px 0px 0px", borderRadius: "10px"
            }}>
                {/* <div> */}
                <div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <p>546+</p>
                        <p>Registered Riders</p> 
                    </div>
                </div>
               
                <div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p>109999+</p>
                    <p>Orders Delivers</p>
                    </div>
                </div>
                <div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p>690+</p>
                    <p>Restaurent Partnered</p>
                    </div>
                </div>
                <div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p>17457+</p>
                    <p>Food Items</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )

}
export default BrandName;