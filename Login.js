import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
import firebase from 'firebase'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert("invalid email id/ password"));
    //some fancy firebase shit
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succesfully create account
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //some fancy firebase shit
  };

  const googleLogin = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      if (user) {
        history.push("/");
      }
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error)
    });
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          //src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          src = "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        {/* <div>
        <h5>Don't have account </h5>
        <h5 onClick={register}>Register here</h5>
        </div> */}
        <button onClick={register} className="login__registerButton">
          Create new Account
        </button>
        <h4 className='p'>or</h4>
        <button className='login__google' onClick={googleLogin}>Sign using Google </button>
      </div>
    </div>
  );
}
export default Login;
