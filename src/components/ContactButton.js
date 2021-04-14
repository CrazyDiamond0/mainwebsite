import React, { useState } from "react";
import Contact from "./Contact";

export default function ContactButton() {
  const [isPoped, setIsPoped] = useState(false);

  return (
    <>
      <div
        id="contact"
        style={{ backgroundColor: "#343a40", textAlign: "center" }}
      >
        <button
          className="btn btn-outline-secondary btn-lg btn-contactme"
          onClick={() => {
            setIsPoped(true);
          }}
        >
          Contact Me
        </button>
      </div>
      <Contact isopen={isPoped} onClose={() => setIsPoped(false)}></Contact>
    </>
  );
}
