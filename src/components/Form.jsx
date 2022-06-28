import React, { useState } from "react";
import "./style.css";
import SignUp from "./SignUp";
import Login from "./Login";

function Form() {
  const [signShow, setSignShow] = useState(true);
  const [loginShow, setLoginShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupInfo, setSignupInfo] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);
  const [error , setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  function handleChange(e) {
    const fName = document.getElementById("fName");
    const inputEmail = document.getElementsByName("email");
    const inputPassword = document.getElementsByName('password');
    if (e.target.name === "fName") {
      setName(fName.value);
    } else if (e.target.name === "email") {
      setEmail(inputEmail.value);
    }
    else {
        setPassword(inputPassword.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(signShow) {
      if(email === '' || name === '' || password === ''){
        setError(true);
        setInterval(() => {
          setError(false)
        }, 6000)
      }
      else {
        setSignupInfo([
          ...signupInfo, {id: Math.random() * 1000, fName: name, email: email, password: password}, 
        ])
        setError(false);
        setSubmit(true);
        setInterval(() => {
          setSubmit(false)
        }, 6000)
      }
    }
    else {
      if(email === '' || password === '' ) {
        setError(true);
        setInterval(() => {
          setError(false);
        }, 6000)
      }
      else {
        setError(false);
        setLoginInfo([
          ...loginInfo, {id: Math.random() * 1000, email: email, password: password},
        ])
        setSubmit(true);
        setInterval(() => {
          setSubmit(false)
        }, 6000);
      }
    }
}

// Showing success message 
  const successMessage = () => {
    return(
      <div 
        className="success"
        style = {{
          display: submit ? '' : 'none',
        }}
      >
        <h1>User {name} successfully Authenticated!</h1>
      </div>
    )
  }

  // Showing Error
  const errorMessages = () => {
    return(
      <div 
        className="error"
        style = {{
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all fields Correctly!</h1>
      </div>
    )
  }


  function handleClick(e) {
    const signupBtn = document.querySelector(".signup");
    const loginBtn = document.querySelector(".login");
    if (e.target.textContent.includes("Sign")) {
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
      setSignShow(true);
      setLoginShow(false);
    } else {
      signupBtn.classList.remove("active");
      loginBtn.classList.add("active");
      setSignShow(false);
      setLoginShow(true);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 scale-125 rounded-lg pb-6"
    >
      <div className="header--image flex w-14 justify-center align-center mx-auto relative rounded-full p-0.5 h-14 bg-blue-400 -top-20 cursor-pointer transition duration-300 ease-in hover:scale-150 hover:ease-in">
        <img
          src="../images/logo.jpg"
          alt=""
          className="rounded-full object-cover w-14"
        />
      </div>
      {/* Calling to Methods  */}
      <div className="messages">
        {errorMessages()}
        {successMessage()}
      </div>
      <div className="switch--wrapper">
        <div className="signup active" onClick={handleClick}>
          Sign Up
        </div>
        <div className="login" onClick={handleClick}>
          Login
        </div>
      </div>
      <SignUp
        signShow={signShow}
        inputValue={inputValue}
        handleChange={handleChange}
        name={name}
        email={email}
        password={password}
      />
      <Login 
        loginShow={loginShow}
        handleChange={handleChange}
        email={email}
        password={password}
       />

      <button
        type="submit"
        className="mt-6 text-white bg-transparent py-1 rounded-md px-4 border-2 border-teal-400 hover:bg-slate-700 transition ease-in duration-300 hover:ease-in"
      >
        {signShow ? "Sign up" : "Login"}
      </button>
    </form>
  );
}

export default Form;
