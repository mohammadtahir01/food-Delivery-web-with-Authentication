import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
