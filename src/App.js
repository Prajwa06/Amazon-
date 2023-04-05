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

function App() {
  const user = useSelector(selectUser);
  console.log(user);
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
          <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </>)  }
    </div>
  );
}

export default App;
