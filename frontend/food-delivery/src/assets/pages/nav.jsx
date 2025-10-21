import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import '../css/nav1.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";



const Nav1 = () => {
  return (
    <>
      <div className="secNav">
          <div className="secNav-logo">
            <img src={logo} alt="Logo" className="secNav-logo__image" />
          </div>
         <div className="secNav__container2">
          <div className="secNav__container">
            <NavLink to="home"  className={({ isActive }) => isActive ? "active-link" : "inactive-link"} >Home</NavLink>
            <NavLink to="pizza&food" className={({ isActive }) => isActive ? "active-link" : "inactive-link"} >Pizza & Food</NavLink>
            <NavLink to="restraunt" className={({ isActive }) => isActive ? "active-link" : "inactive-link"} >Restraunt</NavLink>
            <NavLink to="myProject" className={({ isActive }) => isActive ? "active-link" : "inactive-link"} >MyProduct</NavLink>
          </div>
            <div className="secNav__container__search">
                <input type="text" placeholder="Search AJIO" className="secNav__container__search__input" name="textVal" />
                <button className="secNav__container__search__button">Search</button>
            </div>  

            {/* <div>
                  <MdOutlineShoppingBag />
            </div>   */}

            <Link to="myProject">SignUp</Link>
            <Link to="myProject">LogIn</Link>
        </div>
      </div>
    </>
  );
};
export default Nav1;
