import { Outlet } from "react-router-dom";
import Nav1 from "./assets/pages/nav";
import Footer from "./assets/pages/footer";

function Layout(){
    return(
        <>
        <Nav1/>
        <Outlet/>
       <Footer/> 
        </>
    )
}
export default Layout;