import React from "react";
import NavBar from "../layout/NavBar";

function ErrorMessage() {
  return (
    <>
      <NavBar />
      <main>
        <h3>An error occurred! 404 page not found</h3>
      </main>
    </>
  );
}

export default ErrorMessage;
