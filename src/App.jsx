import React, { useState } from "react";
import AddModal from "./components/AddModal";
export default function App() {
  const [isShow, setIsShow] = useState(false);

  function closeModal() {
    setIsShow((current) => !current);
    // console.log("hello");
  }
  return (
    <>
      <div className="flex items-center justify-center py-8">
        <h1 className="font-Lilita text-6xl">BS Box !</h1>
      </div>
      <div className="min-h-[65vh]"></div>
      <button
        onClick={(e) => {
          setIsShow((current) => !current);
          console.log(e);
        }}
        className="btn btn-effect hover:text-white after:bg-black shadow-orange-500 hover:shadow-orange-500"
      >
        Add Project Idea
      </button>
      {isShow && <AddModal closeModal={closeModal}/>}

    </>
  );
}
