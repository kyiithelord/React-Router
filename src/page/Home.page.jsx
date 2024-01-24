import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const nav = useNavigate();
  const handleToContent = () => {
    nav("/content", { replace: true });
  };
  const handleDataTransfer = (e) => {
    e.preventDefault();
    nav("/content", { state: { name: text } });
    console.log(text);
  };
  return (
    <div>
      <p className="mb-3">HomePage</p>
      <button
        className="border-2 border-blue-400 rounded-lg px-2 py-3 bg-gray-400 hover:ring-4 ring-cyan-500 duration-200"
        onClick={handleToContent}
      >
        Next To Content
      </button>
      <form className="flex flex-col w-[300px]">
        <label htmlFor="name">Name</label>
        <input
          className="border-2 "
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="name"
          id="name"
        />
        <button
          className="mt-3 border-2 border-blue-400 rounded-lg px-2 py-3 bg-gray-400 hover:ring-4 ring-cyan-500 duration-200"
          onClick={handleDataTransfer}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default HomePage;
