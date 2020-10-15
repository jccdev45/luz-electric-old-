import React from "react";

export default function Footer() {
  return (
    <footer className="col aic jcc p-4">
      <span>&copy; {new Date().getFullYear()}</span>
      <span className="my-2">Luz Electric and Control Systems Inc</span>
    </footer>
  );
}
