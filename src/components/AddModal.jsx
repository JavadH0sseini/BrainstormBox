import React, { useRef } from "react";
import useOutsideHandler from "../hooks/useOutsideHandler";

export default function AddModal({ closeModal }) {
  const modalRef = useRef();
  const clikedOut = () => {
    closeModal();
  };
  const clikedIn = () => {};

  useOutsideHandler(modalRef, clikedOut, clikedIn);

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
          type="text"
          id="name"
          className="inp mb-4"
          placeholder="Brainstorm box!"
        />
        <label htmlFor="description" className="font-bold capitalize text-xl">
          write a few lines about you project:
        </label>
        <textarea
          name=""
          id="description"
          className="resize-none inp mb-4"
          placeholder="BrainstormBox is a platform designed to help you capture, organize, and store your project ideas in one convenient location With a user-friendly interface and intuitive features."
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="btn btn-effect hover:text-white before:bg-red-500 shadow-red-500 hover:shadow-black"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
