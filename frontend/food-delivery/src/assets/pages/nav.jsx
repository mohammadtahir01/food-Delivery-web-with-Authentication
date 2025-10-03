import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import '../css/nav1.css';
import { MdOutlineShoppingBag } from "react-icons/md";


const Nav1 = () => {
  return (
    <>
      <div className="secNav">
          <div className="secNav-logo">
            <img src={logo} alt="Logo" className="secNav-logo__image" />
          </div>
         <div className="secNav__container2">
          <div className="secNav__container">
            <Link to="home">Home</Link>
            <Link to="sortdata">SortData</Link>
            <Link to="about">About</Link>
            <Link to="myProject">MyProduct</Link>
          </div>
            <div className="secNav__container__search">
                <input type="text" placeholder="Search AJIO" className="secNav__container__search__input" name="textVal" />
                <button className="secNav__container__search__button">Search</button>
            </div>  

            <div>
                  <MdOutlineShoppingBag />
            </div>  

            <Link to="myProject">SignUp</Link>
            <Link to="myProject">LogIn</Link>
        </div>
      </div>
    </>
  );
};
export default Nav1;
