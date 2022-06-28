import React from "react";

function Login({ loginShow, handleChange, email, password }) {
  return (
    <div
      className={
        loginShow
          ? "login--container show flex flex-col gap-3"
          : "login--container  flex flex-col gap-3"
      }
    >
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

export default Login;
