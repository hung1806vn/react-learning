import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar - render");
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
