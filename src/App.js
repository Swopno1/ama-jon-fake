import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
import SignUp from "./components/SignUp/SignUp";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  return (
    <div>
      <Header></Header>
      {!user.email ? (
        <>
          <button className="btn-login" onClick={handleGoogleSignIn}>
            Log In
          </button>
          <SignUp auth={auth} setUser={setUser}></SignUp>
        </>
      ) : (
        <button className="btn-login" onClick={handleGoogleSignOut}>
          Log Out
        </button>
      )}
      <h2>{user.displayName}</h2>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        {/* <Route path="/login" element={}></Route> */}
        <Route path="*" element={<h1>Home Page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
