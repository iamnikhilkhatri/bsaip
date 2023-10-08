"use client";
import React from "react";
import "./index.scss";
import { useState } from "react";
export const HelpForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${name} and The Email you entered was:${email} and The Message you entered was:${message}`
    );
  };

  return (
    <div className="helpform">
      <div className="heading">
        <h2>
          How can
          <br /> we help you?
        </h2>
      </div>
      <div className="details">
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as
          <br /> well as a random Lipsum generator.
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="upper">
            <input
              type="text"
              className="name"
              placeholder="Name"
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
          <input
            type="text"
            className="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          />
          <div className="submit">
            <input type="submit" value="SEND A MESSAGE"></input>
          </div>
        </form>
      </div>
    </div>
  );
};
