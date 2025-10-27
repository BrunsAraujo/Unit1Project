import { useState } from "react";

import carImage from "./../assets/car.png"; // Replace with your actual image path

function Header() {
  return (

    <header 
    style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderBottom: "2px solid #ccc",
        position: "relative",
      }}
    >
      <h1 style={{ fontSize: "20rem", marginBottom: "10px" }}>
        Turn - <span style={{ display: "inline-block", animation: "shake 0.5s infinite", color: "#ff6600" }}>HERE!</span>
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "3.0rem", marginBottom: "10px" }}>
          Your day trip planned for you.
        </h2>
        <img
          src={carImage}
          alt="Cartoon car"
          style={{
            width: "250px",
            position: "absolute",
            top: "150px",
            left: "2000px",
          }}
        />
      </div>
    </header>
  );
}


export default Header;