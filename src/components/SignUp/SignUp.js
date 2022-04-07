import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";

const SignUp = ({ auth, setUser }) => {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisteredChange = (e) => {
    setRegistered(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    }

    console.log(email, password);
  };

  return (
    <div>
      <h1>User {registered ? "Login" : "Register"}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          onBlur={handleEmailBlur}
          id="userName"
          type="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name=""
          id=""
          placeholder="Password"
          required
        />
        <br />
        <input
          onChange={handleRegisteredChange}
          type="checkbox"
          name="isRegistered"
          id="isRegistered"
        />
        <label htmlFor="isRegistered">Already Registered</label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
