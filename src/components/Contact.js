import React from "react";
import useOnScreen from "../hooks/useOnScreen";

export default function Contact() {
  const [ref, visible] = useOnScreen();
  return (
    <section id="contact" className={`section ${visible ? "reveal" : "hidden"}`} ref={ref}>
      <div className="container">
        <h2>Contact</h2>
        <p>If you’d like to reach out about an opportunity, email me at <a href="mailto:alexanderjhalpern@gmail.com">alexanderjhalpern@gmail.com</a>.</p>
        <p>Or connect on <a href="https://www.linkedin.com/in/alexander-halpern" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
      </div>
    </section>
  );
}
