import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Nav from "./routes/NavBar/nav";
import Checkout from "./routes/checkout/checkout";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
