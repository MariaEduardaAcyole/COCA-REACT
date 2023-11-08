import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Produto from "./pages/Produto";
import Notfound from "./pages/NotFound";
function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Produto" element={<Produto/>}/>
            
            <Route path="*" element={<Notfound/>}/>
         </Routes>
    )
}
export default MainRoutes;