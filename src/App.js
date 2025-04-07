import { Route, Routes, Navigate } from "react-router-dom";
// import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/login';
import { useCookies } from "react-cookie";
import ReactDOM from 'react-dom/client';
import './index.css';
// import {BrowserRouter,Routes,Route}  from "react-router-dom"
import HomePage from './landing_page/home/HomePage';
// import Signup from './landing_page/signup/Signup';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from "./landing_page/pricing/PricingPage"
import AboutPage  from "./landing_page/about/AboutPage"
import  SupportPage from "./landing_page/support/Supportpage"
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

function App() {
  const [cookies] = useCookies(["token"]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={ <HomePage /> }
        />
        <Route
          path="/login"
          element={!cookies.token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!cookies.token ? <Signup /> : <Navigate to="/" />}
        />
          <Route path='/' element={<HomePage/>}/>
    
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;