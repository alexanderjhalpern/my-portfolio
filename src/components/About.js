import React from "react";
import useOnScreen from "../hooks/useOnScreen";

export default function About() {
  const [ref, visible] = useOnScreen();

  return (
    <section id="about" className={`section ${visible ? "reveal" : "hidden"}`} ref={ref}>
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a Senior Software Engineer with over 10 years of experience building
          and maintaining scalable enterprise applications using Java, C#, SQL,
          and JavaScript frameworks. Skilled in designing modular, highperformance
          backends and intuitive frontends across web and
          financial platforms. Experienced in Agile environments with strong
          focus on clean architecture, code quality, and mentoring. Passionate
          about optimizing performance, practices, and delivering software
          that exceeds business goals.
        </p>
      </div>
    </section>
  );
}
