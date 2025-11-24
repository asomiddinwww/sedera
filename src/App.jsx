import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout";
import AllProduct from "./pages/AllProduct";
import Home from "./pages/Home";
import Contact from "./pages/COnatct";
import Our from "./pages/Our";
import About from "./pages/About";
import Sections from "./pages/sedesection";
import Cards from "./pages/sedesection/Cards";

import Detail from "./pages/sedesection/cardpage/Detail"; 


const App = () => {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Sections />} />

        <Route path="allproduct" element={<AllProduct />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="our" element={<Our />} />

        <Route path="cards" element={<Cards />}>
        </Route>

        <Route path="detail/:id" element={<Detail />} />

      </Route>
    </Routes>
  );
};

export default App;
