import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Building payment systems at Pine Labs...",
          "Go · Node.js · TypeScript...",
          "New portfolio → iamsaurabh.in",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
