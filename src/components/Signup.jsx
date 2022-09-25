import React, { useState } from "react";
import "../Styles/login.css";
const host="https://registrationbackend.herokuapp.com";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    org_name: "",
    org_address: "",
    password: "",
  });
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); //this is mainly use to reflect the change in words on frontend
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      phone,
      org_name,
      org_address,
      password,
    } = credentials;

    const response = await fetch(`${host}/registration`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone,
        org_name,
        org_address,
        password,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Create Your Account</h3>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="name"
          onChange={onchange}
          placeholder="Enter Your Name"
          maxLength={50}
          value={credentials.first_name}
          required
        />

        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="name"
          onChange={onchange}
          placeholder="Enter Your Name"
          value={credentials.last_name}
          maxLength={50}
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={onchange}
          id="email"
          maxLength={254}
          value={credentials.email}
          required
        />

        <label htmlFor="name">Phone No.</label>
        <input
          type="text"
          name="phone"
          id="name"
          onChange={onchange}
          placeholder="Enter Your Name"
          minLength={10}
          maxLength={10}
          value={credentials.phone}
          required
        />

        <label htmlFor="name">Organisation Name</label>
        <input
          type="text"
          name="org_name"
          id="name"
          onChange={onchange}
          placeholder="Enter Your Name"
          value={credentials.org_name}
          minLength={4}
          maxLength={1000}
          required
        />

        <label htmlFor="email">Organisation address</label>
        <input
          type="text"
          name="org_address"
          placeholder="Enter your email"
          onChange={onchange}
          id="email"
          minLength={4}
          maxLength={1000}
          value={credentials.org_address}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          onChange={onchange}
          minLength={16}  
          id="password"
          value={credentials.password}
          required
        />

        <button className="login-button">Sign Up</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i>Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i>Facebook
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
