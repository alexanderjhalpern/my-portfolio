import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#hero" className="logo">Alexander Halpern</a>
      </div>
      <div className="nav-right">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
