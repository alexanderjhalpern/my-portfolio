import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello, I’m Alex 👋</h1>
      <p>Welcome to my portfolio site hosted on GitHub Pages.</p>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I'm a Senior Software Engineer with experience in Java, .NET, SQL,
          cloud technologies, distributed systems, and building scalable, high-quality software.
        </p>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <ul>
          <li>Java / Spring</li>
          <li>.NET / C#</li>
          <li>JavaScript / React</li>
          <li>SQL / Databases</li>
          <li>Cloud (AWS / Azure)</li>
        </ul>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <p>Email: alexanderjhalpern@gmail.com</p>
        <p>LinkedIn: /in/alexander-halpern</p>
      </section>
    </div>
  );
}

export default App;