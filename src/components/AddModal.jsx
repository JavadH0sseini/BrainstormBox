import React, { useContext, useRef } from "react";
import useOutsideHandler from "../hooks/useOutsideHandler";
import { ProjectsContext } from "../context/ProjectsContext";

export default function AddModal({ closeModal }) {
  const modalRef = useRef();
  const nameInpRef = useRef();
  const desInpRef = useRef();
  const { addProject } = useContext(ProjectsContext);

  const clikedOut = () => {
    closeModal();
  };
  const clikedIn = () => {};
  useOutsideHandler(modalRef, clikedOut, clikedIn);

  const submitHandler = (e) => {
    e.preventDefault();
    const newProject = {
      title: nameInpRef.current.value,
      description: desInpRef.current.value,
    };

    if (newProject.title && newProject.description) {
      addProject(newProject);
      closeModal();
    }
    
  };
  

  return (
    <div className="bg-[#000a] flex justify-center items-center fixed top-0 h-[100vh] w-full font-outfit">
      <form
        ref={modalRef}
        className="bg-white rounded gap-2 w-[600px] flex flex-col p-6"
      >
        <label htmlFor="name" className="font-bold capitalize text-xl">
          name of your project:
        </label>
        <input
          ref={nameInpRef}
          type="text"
          id="name"
          className="inp mb-4"
          placeholder="Brainstorm box!"
          required
        />
        <label htmlFor="description" className="font-bold capitalize text-xl">
          write a few lines about you project:
        </label>
        <textarea
          ref={desInpRef}
          name=""
          id="description"
          className="resize-none inp mb-4"
          placeholder="BrainstormBox is a platform designed to help you capture, organize, and store your project ideas in one convenient location With a user-friendly interface and intuitive features."
          required
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="btn btn-effect hover:text-white before:bg-red-500 shadow-red-500 hover:shadow-black"
          onClick={submitHandler}
        >
          submit
        </button>
      </form>
    </div>
  );
}
