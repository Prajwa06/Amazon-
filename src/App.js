import "./App.css";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import Login from "./components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Success from "./components/Success";
import Orders from "./components/Orders";

const stripePromise=loadStripe("pk_test_51MtV8wSEa4vZ8TNnHcml6zUosKNLK3jAUTCVA1abfY8o82l9fMUV5UJRv7QdihIMLjDNS4i2xsMH8dnCF9FIsJXJ00yGWkv8tY");

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }));
        // ...
      } else {
        dispatch(logout());
      }
    });
  },[dispatch]);


  return (
    <div className="App ">
      {!user ? (<Login/>) : (
        <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Elements stripe={stripePromise}><Checkout/></Elements>}/>
          <Route path="/success" element={<Elements stripe={stripePromise}><Success/></Elements>}/>
          <Route path="/orders" element={<Orders/>}/>
          </Routes>
        </>)  }
    </div>
  );
}

export default App;
