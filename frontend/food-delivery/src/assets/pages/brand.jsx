import { useEffect, useState } from "react";
import axios from "axios"
import Card from 'react-bootstrap/Card';

function BrandName() {
    const [val, setVal] = useState([])

    const onload = async () => {
        let api = "http://localhost:3000/Brand"
        let res = await axios.get(api);
        console.log(res.data);
        setVal(res.data);
    }

    useEffect(() => {
        onload();
    }, [])

    const ans = val.map((item) => {

        return (
            <Card>
                <Card.Img variant="top" src={item.image} style={{height:"150px"}} />
                <Card.Body>
                    <Card.Text>
                        {item.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    })

    return (
        <>
        <div style={{padding:"1rem 0px 1rem 2rem"}}>
            <h5>Similar Restaurents</h5>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            {ans}
        </div>
        </>
    )

}
export default BrandName;