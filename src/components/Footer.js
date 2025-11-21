import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Alexander Halpern — Built with care.</p>
      </div>
    </footer>
  );
}
