import "./App.css";

import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";

import Nav from "./routes/NavBar/nav";

import Checkout from "./routes/checkout/checkout";

import Authentication from "./routes/authentication/authentication";

import Shop from "./routes/shop/shop";

import {
  onAuthStateChange,
  createUserDocFromAuth,
} from "./utlis/firebase.utlis";

import { setCurrentUser } from "./store/user/user.action";

import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChange((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      console.log(user);
      dispatch(setCurrentUser(user));
    });
    return unsub;
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
