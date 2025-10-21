import { useEffect, useState } from "react";
import { MdMenuBook } from "react-icons/md";
import axios from "axios";
//react icons
import { IoIosAlarm } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";

function MenuCard() {
  const [menuItems, setMenuItems] = useState([]);
  const [val, setVal] = useState([]);
  const categories = ["Pizza", "Garlic Bread", "Salads", "Kebabs"];
  const [category, setCategory] = useState("Pizza");

  const onload = async () => {
    try {
      const api = "http://localhost:3000/MENU";
      const res = await axios.get(api)
      setMenuItems(res.data.data);
      console.log("menu ", res.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    onload();
  }, []);


  const deal = async (price, id, sizeId) => {
  try {
    const api = `http://localhost:3000/dealPrice/${id}/${sizeId}`;
    const res = await axios.get(api);
    const selectSize = res.data.dealData;
    const mergedData = { ...res.data.dealData1, price: selectSize.price, size:selectSize, qty: 1 };

    setVal((prev) => {
      const existing = prev.find((item) => item._id === mergedData._id && item.sizeId === sizeId);
      if (existing) {
        // If item already in basket → increase quantity
        return prev.map((item) =>
          item._id === mergedData._id && item.sizeId === sizeId? { ...item, qty: item.qty + 1 }: item);
      } else {
        // Add new item
        return [...prev, { ...mergedData, sizeId }];
      }
    });
  } catch (err) {
    console.error("Error fetching deal:", err);
  }
};



  const filteredItems = menuItems.filter(item => item.category === category);

  return (
    <>
      <div>
        <h6 style={{ padding: "1rem 1rem 1rem 3rem" }}>
          <b>Order from Tandoori Pizza London</b>
        </h6>
      </div>

      <div style={{ display: "flex", gap: "2rem", padding: "1rem", justifyContent:"space-evenly"}}>
        {/* Category menu */}
        <div style={{ minWidth: "150px" }}>
          <h5><MdMenuBook /> Menu</h5>
          <div style={{ marginLeft: "1rem" }}>
            {categories.map((item, index) => (
              <div key={index} onClick={() => setCategory(item)}
                style={{ margin: "5px 0", fontSize: "16px", cursor: "pointer", fontWeight: category === item ? "bold" : "normal" }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Menu items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredItems.map((item,i) => (
            <div key={item._id}
              style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "10px", maxWidth: "400px" }}>
              <div style={{ display: "flex" }}>
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
                <img
                  src={item.image}
                  style={{ width: "120px", borderRadius: "10px", marginTop: "5px" }} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-evenly", padding: "10px 0px 10px 0px" }}>
                <>
                  <button onClick={() => deal(item.sizes[0].price,item._id,item.sizes[0]._id)} style={{ padding: "5px 8px 5px 8px", borderRadius: "20px", border: "none", backgroundColor: "gray" }}>{item.sizes[0].label} : {item.sizes[0].price}</button>
                  <button onClick={() => deal(item.sizes[1].price,item._id,item.sizes[1]._id)} style={{ padding: "5px 8px 5px 8px", borderRadius: "20px", border: "none", backgroundColor: "gray" }}>{item.sizes[1].label} : {item.sizes[1].price}</button>
                  <button onClick={() => deal(item.sizes[2].price,item._id,item.sizes[2]._id)} style={{ padding: "5px 8px 5px 8px", borderRadius: "20px", border: "none", backgroundColor: "gray" }}>{item.sizes[2].label} : {item.sizes[2].price}</button>
                </>
              </div>

              <div style={{
                display: "flex", justifyContent: "space-between", lignItems: "baseline",
                padding: "10px 0px 0px 24px"
              }}>
                <button style={{ padding: "5px 20px", borderRadius: "20px", border: "none", backgroundColor: "gray" }}>Add</button>
                <p>Rating: {item.rating} ⭐ </p>
              </div>

            </div>
          ))}
          {filteredItems.length === 0 && <p>No items available in this category.</p>}
        </div>


        {/* /// price list */}

        <div style={{width:"20%"}}>
          <div style={{ backgroundColor: "rgb(242, 140, 40)", borderRadius: "10px" }}>
            <p style={{ padding: "1rem" }}><IoIosAlarm style={{ fontSize: "24px" }} /> Open until 3:00 AM</p>
          </div>
          
            <div style={{ backgroundColor: "rgb(65, 163, 23)", borderRadius: "10px" }}>
              <h5 style={{ padding: "1rem" }}><FaBasketShopping /> My Basket</h5>
            </div>
            <div style={{display:"flex",flexDirection:"column" , height: "500px",
    overflowY: "auto",     
    scrollbarWidth: "thin", }}>

              {  val.map((s, i) => {
               return  <div key={i} style={{ padding: "10px" }}>
                <div>
                 <div style={{display:"flex",justifyContent:"space-evenly",gap:"1rem"}}>
                   <img src={s.image} style={{height:"50px"}}/>
                    <b>Name:-{s.name}</b>
                 </div>
                  <div>
                    Des:-{s.description}
                    <br />
                    Sizes:- <b>{s.size.label}</b>
                    <br />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <b> <span style={{position:"relative", top:""}}>Rs:- {s.price}</span></b>
                     <span>Qty: {s.qty}</span>
                     <button>delete</button>
                     </div>
                    </div>
                  </div>

                </div>
              })}

              
            </div>

          </div>


          {/* third div here */}
          <div></div>
      </div>
    </>
  );
}

export default MenuCard;
