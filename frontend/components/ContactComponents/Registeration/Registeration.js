"use client";
import React from "react";
import "./index.scss";
import { useState } from "react";
export const Registeration = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("hi");
    setFirst("");
    setConfirmPass("");
    setPass("");
    setEmail("");
    setName("");
    setLast("");
  };
  return (
    <div className="registeration-form">
      <form onSubmit={handleSubmit}>
        <div className="upper">
          <input
            type="text"
            className="first"
            placeholder="First Name"
            value={first}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
            required
          />

          <input
            type="text"
            className="last"
            placeholder="Last Name"
            value={last}
            onChange={(e) => {
              setLast(e.target.value);
            }}
            required
          />
        </div>

        <div className="mid">
          <input
            type="text"
            className="name"
            placeholder="User Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="lower">
          <input
            type="text"
            className="pass"
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            required
          />
          <input
            type="text"
            className="confirmpass"
            placeholder="Password confirmation"
            value={confirmPass}
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            required
          />
        </div>

        <div className="submit">
          <input type="submit" value="REGISTER"></input>
        </div>
      </form>
    </div>
  );
};
