import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/footer" element={<Footer/>}/>


      </Routes>

      <Footer/>
      {/* <Home /> */}
      {/* <Services/>
      <Order/>
      <About/>
      <Contact/>
      <Footer/> */}
    </>
  );
};

export default App;
