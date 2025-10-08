// import { useEffect, useState } from "react";
// import { MdMenuBook } from "react-icons/md";
// import axios from "axios";

// function MenuCard() {
//   const [menuItems, setMenuItems] = useState([]);
//   const categories = ["Pizza", "Garlic Bread", "Salads", "Kebabs"];
//   const [category, setCategory] = useState("");

//   const onload = async () => {
//     try {
//       const api = "http://localhost:3000/MENU";
//       const res = await axios.get(api);
//       setMenuItems(res.data);
//       console.log("menu ",res.data);
//     } catch (err) {
//       console.error("Error loading data:", err);
//     }
//   };

//   useEffect(() => {
//     onload();
//   }, []);

//   // Filter items by selected category
//   const filteredItems = menuItems.filter(item => item.category === category);

//   return (
//     <>
//       <div>
//         <h6 style={{ padding: "1rem 1rem 1rem 3rem" }}>
//           <b>Order from Tandoori Pizza London</b>
//         </h6>
//       </div>

//       <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
//         {/* Category menu */}
//         <div style={{ minWidth: "150px" }}>
//           <h5><MdMenuBook /> Menu</h5>
//           <div style={{ marginLeft: "1rem" }}>
//             {categories.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setCategory(item)}
//                 style={{ margin: "5px 0", fontSize: "16px", cursor: "pointer", fontWeight: category === item ? "bold" : "normal" }}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Menu items */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 border: "1px solid lightgray",
//                 borderRadius: "10px",
//                 padding: "10px",
//                 maxWidth: "400px",
//               }}
//             >
//               <h5>{item.name}</h5>
//               <p>{item.description}</p>

//               <div>
//                 <b>Sizes:</b>
//                 {item.sizes && item.sizes.map((s) => (
//                   <div key={s.key}>
//                     {s.label} — {s.price}
//                   </div>
//                 ))}
//               </div>

//               <p>⭐ Rating: {item.rating}</p>

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: "120px", borderRadius: "10px", marginTop: "5px" }}
//               />
//             </div>
//           ))}
//           {filteredItems.length === 0 && <p>No items available in this category.</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default MenuCard;
