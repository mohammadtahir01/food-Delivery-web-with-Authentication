import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import Card from "react-bootstrap/Card";
//rating.css
import "../css/rating.css";



function ShowRest() {
  const { id } = useParams();
  const [set, setData] = useState([]);
  const [comnt, setComnt] = useState("");   // for comment
  const [rating, setRating] = useState(0);  // for star rating
  const [reviews, setReviews] = useState([]); // all reviews


  const onload = async () => {
    let api = `http://localhost:3000/getresturant/${id}`;
    let res = await axios.get(api);
    //    console.log(res.data.data);
    setData(res.data.data);
  }

   const reviewsOnload=async()=>{
    const api = `http://localhost:3000/getrating/${id}`;
    let res = await axios.get(api);
    console.log(res.data.data);
    setReviews(res.data.data);
  }

  useEffect(() => {
    onload();
    reviewsOnload();
  }, [])


  const subComnt = async () => {
    const api = `http://localhost:3000/sendrating`;
    const data1 = {
    restId: id,
    comment: comnt,
    rating:rating
  };
    let res = await axios.post(api, data1);
    console.log(res.data.data);
    setReviews(prev => [res.data.data, ...prev]);
    setComnt("");   // clear textarea
    setRating(0);   // reset rating
  }

 

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <div style={{ width: "50%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={set.image} alt={set.name} style={{ width: "80%", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", borderRadius: "1rem" }} />
        </div>
        <div style={{ display: "grid", padding: "1rem", position: "relative", left: "3rem" }}>
          <div>
            <p>{set.name}</p>
          </div>
          <div>
            <strong>Cuisine:</strong> {set.cuisine}
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span><strong>Discount:</strong> {set.discount}</span>
              <button style={{
                padding: "6px 10px", border: "none", borderRadius: "10px", backgroundColor: "orange",
                position: "relative", right: "6rem"
              }}>Add</button>
            </div>
          </div>
        </div>
        <hr />

{/* starability-slot */}
        <h5>Rating</h5>

  <fieldset class="starability-slot">
  <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked={rating === 0}  aria-label="No rating." />
  <input type="radio" id="first-rate1" name="rating" value="1" onChange={(e)=>setRating(e.target.value)}/>
  <label for="first-rate1" title="Terrible">1 star</label>
  <input type="radio" id="first-rate2" name="rating" value="2" onChange={(e)=>setRating(e.target.value)}/>
  <label for="first-rate2" title="Not good">2 stars</label>
  <input type="radio" id="first-rate3" name="rating" value="3" onChange={(e)=>setRating(e.target.value)}/>
  <label for="first-rate3" title="Average">3 stars</label>
  <input type="radio" id="first-rate4" name="rating" value="4" onChange={(e)=>setRating(e.target.value)}/>
  <label for="first-rate4" title="Very good">4 stars</label>
  <input type="radio" id="first-rate5" name="rating" value="5" onChange={(e)=>setRating(e.target.value)}/>
  <label for="first-rate5" title="Amazing">5 stars</label>
</fieldset>



        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea name="commnet" placeholder="Please Leave Feedback Here..."
            onChange={(e) => setComnt(e.target.value)} value={comnt}
            style={{ padding: "5px 0px 10px 10px", outline: "none" }} ></textarea>
        </div>
        <div style={{ display: "flex", padding: "10px 0px 10px" }}>
          <button style={{ padding: "6px 16px 6px 16px", border: "none", borderRadius: "10px", backgroundColor: "orange" }} onClick={subComnt}>Submit</button>
        </div>
        <hr />
        <b><p>All Reviews</p></b>

        
        <div style={{ marginTop: "1rem" }}>
  {reviews.length > 0 ? (
    reviews.map((rev, i) => (
      <div key={i} style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9"
      }}>
        <p><strong>Rating:</strong> {"⭐".repeat(rev.rating)}</p>
        <p><strong>Comment:</strong> {rev.comment}</p>
      </div>
    ))
  ) : (
    <p>No reviews yet. Be the first to write one!</p>
  )}
</div>



      </div>
    </div>
  )
}
export default ShowRest;