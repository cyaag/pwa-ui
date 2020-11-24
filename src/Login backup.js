/** @format */

import React, { useState } from "react";

function SignIn(props) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    props.history.push("/App");
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div>
        Phone Number
        <br />
        <input type="text" {...username} placeholder="Phone Number" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input
          type="password"
          {...password}
          autoComplete="new-password"
          placeholder="Password"
        />
      </div>
      <span>Forgot Password?</span>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        type="button"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
      <br />
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default SignIn;
