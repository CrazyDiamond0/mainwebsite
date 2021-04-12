import React from "react";
import Typed from "react-typed";

export default function Body() {
  return (
    <h1
      id="home"
      className="title"
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <Typed
        strings={["Hi, I'm Alex ", "Welcome to my website"]}
        typeSpeed={40}
        backSpeed={50}
      ></Typed>
    </h1>
  );
}
