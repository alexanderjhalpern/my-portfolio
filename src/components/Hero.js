import React from "react";
import { useTypewriter } from "../typewriter";
import "./hero.css";

export default function Hero() {
  const { text, blink } = useTypewriter([
    "Senior Software Engineer",
    "Distributed Systems • Java • .NET",
    "Building reliable, scalable systems",
  ], 80, 900);

  return (
    <header id="hero" className="hero container">
      <div className="hero-inner">
        <h1 className="hero-title">Hi I'm Alexander, but you can call me Alex.</h1>
        <p className="hero-sub">
          <span>{text}</span>
          <span className="cursor" style={{ opacity: blink ? 1 : 0 }}>|</span>
        </p>

        <div className="hero-cta">
          <a
            className="btn outline"
            href="2026-AlexanderHalpernResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
