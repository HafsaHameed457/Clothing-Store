import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Nav from "./routes/NavBar/nav";
const Shop = () => {
  return (
    <div>
      <h4>I am Shop</h4>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
