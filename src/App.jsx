import React, { useState } from "react";
import AddModal from "./components/AddModal";
import ProjectList from "./components/ProjectsList";


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
      <div className="min-h-[65vh]">
        <ProjectList/>
      </div>
      <button
        onClick={(e) => {
          setIsShow((current) => !current);
          console.log(e);
        }}
        className="btn btn-effect hover:text-white before:bg-orange-500 shadow-orange-500 hover:shadow-black"
      >
        Add Project Idea
      </button>
      {isShow && <AddModal closeModal={closeModal}/>}

    </>
  );
}
