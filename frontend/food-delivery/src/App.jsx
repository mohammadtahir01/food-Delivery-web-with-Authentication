import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/pages/home";
import Pizza from "./assets/pages/pizza&food";
import RestrauntMenu from "./assets/pages/restraunt";
import ShowRest from "./assets/pages/showRestdata";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="pizza&food" element={<Pizza/>}/>
        <Route path="restraunt" element={<RestrauntMenu/>}/>
        <Route path="showRest/:id" element={<ShowRest/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
