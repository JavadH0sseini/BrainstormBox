import { createContext, useState } from "react";

export const ProjectsContext = createContext({
  projects: [],
  addProject: () => {},
});



const ProjectsProvider = ({ children }) => {
  const [projects, setProject] = useState([
    {
      title: "BrainstormBox",
      description:
        "BrainstormBox is a platform designed to help you capture, organize, and store your project ideas in one convenient location With a user-friendly interface and intuitive features.",
    },
  ]);

  const addProject = (newProject) => {
    setProject([...projects, newProject]);
  };

  return (
    <ProjectsContext.Provider value={{projects:projects, addProject:addProject}}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;