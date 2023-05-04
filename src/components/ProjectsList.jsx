import React, { Fragment, useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import SingleProject from "./SingleProject";

export default function ProjectsList() {
  const {projects} = useContext(ProjectsContext);

  return (
    <div className="container mx-auto flex flex-col gap-4">
      {projects.map((project, index) => (
        <Fragment key={`Project_${index + 1}`}>
          <SingleProject
            title={project.title}
            description={project.description}
          />
        </Fragment>
      ))}
    </div>
  );
}
