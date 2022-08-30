import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import ProductScreen from "./ProductScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/product/:slug" element={<ProductScreen/>}/>
          </Routes>
        
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
