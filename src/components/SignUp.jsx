import React from "react";

function SignUp({ signShow, handleChange, inputValue, name, email, password }) {
  return (
    <div
      className={
        signShow
          ? "signup--container show flex flex-col gap-3"
          : "signup--container flex flex-col gap-3"
      }
    >
      <label htmlFor="fName">Full Name</label>
      <input
        name="fName"
        type="text"
        placeholder="Enter your Name"
        id="fName"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        id="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Choose a Strong Password"
        id="password"
        onChange={handleChange}
        value={password}
      />
    </div>
  );
}

export default SignUp;
