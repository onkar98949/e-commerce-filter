import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import AllProducts from "./Pages/AllProducts";


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={AllProducts} />
            <Route path="/cart" exact Component={Cart} />
            {/* <Route path="/products" Component={AllProducts} /> */}
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
