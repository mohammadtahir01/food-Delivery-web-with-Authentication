import { useEffect, useState } from "react";
import { MdMenuBook } from "react-icons/md";
import axios from "axios";

function MenuCard() {
  const [val, setVal] = useState([]);
  const china = ["Pizza", "Garlic Bread", "Salads", "Kebabs"];
  const [category,setCategory] = useState(china);

  const onload = async () => {
    try {
      let api = "http://localhost:3000/MENU";
      let res = await axios.get(api);
      setVal(res.data); 
      console.log(res.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    onload();
  }, []);


  const filteredItems = category === china ? val : [];

  const ans = filteredItems.map((item, idx) => {
    return (
      <div
        key={idx}
        style={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px 0",
          maxWidth: "400px",
        }}
      >
        <h5>{item.name}</h5>
        <p>{item.description}</p>

        {/* ✅ Map through sizes */}
        <div>
          <b>Sizes:</b>
          {item.sizes && item.sizes.map((s, i) => (
            <div key={i}>
              {s.label} — {s.price}
            </div>
          ))}
        </div>

        <p>⭐ Rating: {item.rating}</p>

        {/* ✅ Show image */}
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "120px", borderRadius: "10px", marginTop: "5px" }}
        />
      </div>
    );
  });

  return (
    <>
      <div>
        <h6 style={{ padding: "1rem 1rem 1rem 3rem" }}>
          <b>Order from Tandoori Pizza London</b>
        </h6>
      </div>

      <div style={{display:"flex"}}>
        <div>
          <h5>
            <MdMenuBook /> Menu
          </h5>
       

        <div style={{ marginLeft: "1rem" }}>
          {china.map((item, index) => (
            <div key={index} onClick={()=>setCategory(item)} style={{ margin: "5px 0", fontSize: "16px" }}>
              {item}
            </div>
          ))}
        </div>
         </div>

        <div style={{ marginTop: "1rem" }}>
           {filteredItems.length > 0 ? (
            ans
          ) : (
            <p>No items available for {category}.</p>
          )}

            </div>
      </div>
    </>
  );
}

export default MenuCard;
