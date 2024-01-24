import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContentPage = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const handleToBack = () => {
    nav(-1);
  };
  return (
    <div>
      <p className="mb-3">ContentPage</p>
      <button
        onClick={handleToBack}
        className="border-2 border-blue-400 rounded-lg px-2 py-3 bg-gray-400 hover:ring-4 ring-cyan-500 duration-200"
      >
        Back
      </button>
      contect name is {state?.name}
    </div>
  );
};

export default ContentPage;
