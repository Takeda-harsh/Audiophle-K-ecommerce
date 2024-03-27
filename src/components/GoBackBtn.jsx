/* eslint-disable no-unused-vars */
import React from "react";

import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

const GoBackBtn = () => {
  // Access the history object using useHistory hook
  const navigate = useNavigate();

  // Function to navigate back in history on button click
  const goToPreviousPath = () => navigate(-1);

  return (
    // Render a button with "Go Back" text and custom styles
    <div onClick={goToPreviousPath}>Go Back</div>
  );
};

export default GoBackBtn;
