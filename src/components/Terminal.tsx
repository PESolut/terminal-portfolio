import React from "react";
import NavBar from "./NavBar";
import "./Terminal.css";
import Header from "./Header";

const Terminal: React.FC = () => {
  return (
    <div className="terminal">
        <NavBar/>
        <Header/>
    </div>
  );
};

export default Terminal;
