import React from "react";

const Error = ({ error }) => {
  let errorMessage = "Something went wrong!!. Please reload the page.";
  if (error) {
    if (error.response?.data) {
      errorMessage = error.response.data;
    } else if (error.message) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }
  }

  return (
    <div className="error-container">
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default Error;
